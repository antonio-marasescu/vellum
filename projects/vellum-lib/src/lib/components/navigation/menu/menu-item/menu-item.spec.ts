import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from '../menu';
import { MenuItem } from './menu-item';

@Component({
  imports: [Menu, MenuItem],
  template: `
    <vlm-menu [disabled]="groupDisabled()" [vertical]="groupVertical()">
      <vlm-menu-item [active]="active()" [disabled]="itemDisabled()" (clicked)="onClicked()">
        Home
      </vlm-menu-item>
      <vlm-menu-item>
        Products
        <vlm-menu menuItems>
          <vlm-menu-item>All products</vlm-menu-item>
          <vlm-menu-item>
            Electronics
            <vlm-menu menuItems>
              <vlm-menu-item>Phones</vlm-menu-item>
            </vlm-menu>
          </vlm-menu-item>
        </vlm-menu>
      </vlm-menu-item>
    </vlm-menu>
  `
})
class MenuItemHost {
  readonly groupDisabled = signal(false);
  readonly groupVertical = signal(true);
  readonly itemDisabled = signal(false);
  readonly active = signal(false);
  clickCount = 0;

  onClicked(): void {
    this.clickCount++;
  }
}

describe('MenuItem', () => {
  let hostFixture: ComponentFixture<MenuItemHost>;
  let host: MenuItemHost;

  const getItemButtons = (): HTMLButtonElement[] =>
    Array.from(hostFixture.nativeElement.querySelectorAll('button'));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemHost]
    }).compileComponents();

    hostFixture = TestBed.createComponent(MenuItemHost);
    host = hostFixture.componentInstance;
    await hostFixture.whenStable();
    hostFixture.detectChanges();
  });

  it('should require a Menu ancestor', () => {
    expect(() => TestBed.createComponent(MenuItem)).toThrow();
  });

  it('should render projected content', () => {
    expect(getItemButtons()[0].textContent).toContain('Home');
  });

  it('should emit clicked for a leaf item', () => {
    getItemButtons()[0].click();
    hostFixture.detectChanges();

    expect(host.clickCount).toBe(1);
  });

  it('should not emit clicked when disabled', () => {
    host.itemDisabled.set(true);
    hostFixture.detectChanges();

    expect(getItemButtons()[0].disabled).toBe(true);
    getItemButtons()[0].click();
    hostFixture.detectChanges();

    expect(host.clickCount).toBe(0);
  });

  it('should not emit clicked when the group is disabled', () => {
    host.groupDisabled.set(true);
    hostFixture.detectChanges();

    getItemButtons()[0].click();
    hostFixture.detectChanges();

    expect(host.clickCount).toBe(0);
  });

  it('should reflect the active state via aria-current', () => {
    host.active.set(true);
    hostFixture.detectChanges();

    expect(getItemButtons()[0].getAttribute('aria-current')).toBe('page');
  });

  it('should toggle expanded and show the nested menu instead of emitting clicked, for an item with a submenu', () => {
    const submenuButton = getItemButtons()[1];
    expect(submenuButton.getAttribute('aria-expanded')).toBe('false');

    submenuButton.click();
    hostFixture.detectChanges();

    expect(submenuButton.getAttribute('aria-expanded')).toBe('true');
    expect(host.clickCount).toBe(0);
    expect(hostFixture.nativeElement.textContent).toContain('All products');
  });

  it('should render the submenu in-flow, indented, when the group is vertical', () => {
    getItemButtons()[1].click();
    hostFixture.detectChanges();

    const submenuWrapper: HTMLElement = hostFixture.nativeElement.querySelector(
      '.vlm-menu-item__submenu-wrapper'
    );
    expect(submenuWrapper.className).toContain('pl-[var(--vlm-menu-item-submenu-indent)]');
    expect(submenuWrapper.className).not.toContain('absolute');
  });

  it('should render the submenu as a floating panel, sized to its own content, when the group is horizontal', () => {
    host.groupVertical.set(false);
    hostFixture.detectChanges();

    getItemButtons()[1].click();
    hostFixture.detectChanges();

    const submenuWrapper: HTMLElement = hostFixture.nativeElement.querySelector(
      '.vlm-menu-item__submenu-wrapper'
    );
    expect(submenuWrapper.className).toContain('absolute');
    expect(submenuWrapper.className).toContain('w-max');
  });

  it('should keep the floating submenu panel hidden until expanded', () => {
    host.groupVertical.set(false);
    hostFixture.detectChanges();

    const submenuWrapper: HTMLElement = hostFixture.nativeElement.querySelector(
      '.vlm-menu-item__submenu-wrapper'
    );
    expect(submenuWrapper.className).toContain('hidden');
  });

  it('should render nested submenus at every level, not just the first', () => {
    const findButtonByText = (text: string): HTMLButtonElement =>
      getItemButtons().find(button => button.textContent?.includes(text)) as HTMLButtonElement;

    findButtonByText('Products').click();
    hostFixture.detectChanges();
    expect(hostFixture.nativeElement.textContent).toContain('All products');
    expect(hostFixture.nativeElement.textContent).toContain('Electronics');

    findButtonByText('Electronics').click();
    hostFixture.detectChanges();
    expect(hostFixture.nativeElement.textContent).toContain('Phones');
  });
});
