import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu';
import { MenuItem } from './menu-item/menu-item';

@Component({
  imports: [Menu, MenuItem],
  template: `
    <vlm-menu>
      <vlm-menu-item>Home</vlm-menu-item>
      <vlm-menu-item>About</vlm-menu-item>
    </vlm-menu>
  `
})
class MenuHost {}

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu]
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projected items', async () => {
    const hostFixture = TestBed.createComponent(MenuHost);
    await hostFixture.whenStable();
    hostFixture.detectChanges();

    expect(hostFixture.nativeElement.textContent).toContain('Home');
    expect(hostFixture.nativeElement.textContent).toContain('About');
  });

  it('should default to vertical layout', () => {
    fixture.detectChanges();

    const list: HTMLElement = fixture.nativeElement.querySelector('ul');
    expect(list.classList).toContain('flex-col');
  });

  it('should switch to horizontal layout when vertical is false', () => {
    fixture.componentRef.setInput('vertical', false);
    fixture.detectChanges();

    const list: HTMLElement = fixture.nativeElement.querySelector('ul');
    expect(list.classList).toContain('flex-row');
  });

  it('should not set an id attribute when id is not provided', () => {
    fixture.detectChanges();

    const list: HTMLElement = fixture.nativeElement.querySelector('ul');
    expect(list.hasAttribute('id')).toBe(false);
  });
});
