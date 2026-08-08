import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleGroup } from '../button-toggle-group';
import { ButtonToggle } from './button-toggle';

@Component({
  imports: [ButtonToggleGroup, ButtonToggle],
  template: `
    <vlm-button-toggle-group [value]="value()">
      <vlm-button-toggle value="a">Angular</vlm-button-toggle>
    </vlm-button-toggle-group>
  `
})
class ButtonToggleHost {
  readonly value = signal<readonly string[]>([]);
}

describe('ButtonToggle', () => {
  let hostFixture: ComponentFixture<ButtonToggleHost>;
  let host: ButtonToggleHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleHost]
    }).compileComponents();

    hostFixture = TestBed.createComponent(ButtonToggleHost);
    host = hostFixture.componentInstance;
    await hostFixture.whenStable();
    hostFixture.detectChanges();
  });

  it('should require a ButtonToggleGroup ancestor', () => {
    expect(() => TestBed.createComponent(ButtonToggle)).toThrow();
  });

  it('should render projected content', () => {
    expect(hostFixture.nativeElement.querySelector('button').textContent?.trim()).toBe('Angular');
  });

  it('should reflect the selected state from the group value', () => {
    host.value.set(['a']);
    hostFixture.detectChanges();

    const button: HTMLButtonElement = hostFixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('vlm-button-toggle--selected');
  });
});
