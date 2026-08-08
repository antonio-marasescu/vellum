import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggle } from './button-toggle/button-toggle';
import { ButtonToggleGroup } from './button-toggle-group';

@Component({
  imports: [ButtonToggleGroup, ButtonToggle],
  template: `
    <vlm-button-toggle-group
      [multiple]="multiple()"
      [vertical]="vertical()"
      [disabled]="disabled()"
      [value]="value()"
      (selectionChange)="onChange($event)"
    >
      <vlm-button-toggle value="a">A</vlm-button-toggle>
      <vlm-button-toggle value="b">B</vlm-button-toggle>
      <vlm-button-toggle value="c" [disabled]="cDisabled()">C</vlm-button-toggle>
    </vlm-button-toggle-group>
  `
})
class ButtonToggleGroupHost {
  readonly multiple = signal(false);
  readonly vertical = signal(false);
  readonly disabled = signal(false);
  readonly cDisabled = signal(false);
  readonly value = signal<readonly string[]>([]);
  lastChange: readonly string[] | null = null;

  onChange(value: readonly string[]): void {
    this.lastChange = value;
  }
}

describe('ButtonToggleGroup', () => {
  let hostFixture: ComponentFixture<ButtonToggleGroupHost>;
  let host: ButtonToggleGroupHost;

  const getToggle = (label: string): HTMLButtonElement =>
    Array.from(hostFixture.nativeElement.querySelectorAll('button')).find(
      (button): button is HTMLButtonElement =>
        (button as HTMLButtonElement).textContent?.trim() === label
    ) as HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleGroupHost]
    }).compileComponents();

    hostFixture = TestBed.createComponent(ButtonToggleGroupHost);
    host = hostFixture.componentInstance;
    await hostFixture.whenStable();
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(host).toBeTruthy();
  });

  it('should select a toggle and emit change on click', () => {
    getToggle('A').click();
    hostFixture.detectChanges();

    expect(host.lastChange).toEqual(['a']);
    expect(getToggle('A').classList).toContain('vlm-button-toggle--selected');
  });

  it('should switch selection exclusively in single-select mode', () => {
    getToggle('A').click();
    hostFixture.detectChanges();
    getToggle('B').click();
    hostFixture.detectChanges();

    expect(host.lastChange).toEqual(['b']);
    expect(getToggle('A').classList).not.toContain('vlm-button-toggle--selected');
    expect(getToggle('B').classList).toContain('vlm-button-toggle--selected');
  });

  it('should deselect a toggle when clicked again in single-select mode', () => {
    getToggle('A').click();
    hostFixture.detectChanges();
    getToggle('A').click();
    hostFixture.detectChanges();

    expect(host.lastChange).toEqual([]);
    expect(getToggle('A').classList).not.toContain('vlm-button-toggle--selected');
  });

  it('should allow multiple selections when multiple is true', () => {
    host.multiple.set(true);
    hostFixture.detectChanges();

    getToggle('A').click();
    hostFixture.detectChanges();
    getToggle('B').click();
    hostFixture.detectChanges();

    expect(host.lastChange).toEqual(['a', 'b']);
    expect(getToggle('A').classList).toContain('vlm-button-toggle--selected');
    expect(getToggle('B').classList).toContain('vlm-button-toggle--selected');
  });

  it('should not select or emit when the group is disabled', () => {
    host.disabled.set(true);
    hostFixture.detectChanges();

    getToggle('A').click();
    hostFixture.detectChanges();

    expect(host.lastChange).toBeNull();
    expect(getToggle('A').classList).not.toContain('vlm-button-toggle--selected');
  });

  it('should not select or emit when an individual toggle is disabled', () => {
    host.cDisabled.set(true);
    hostFixture.detectChanges();

    expect(getToggle('C').disabled).toBe(true);

    getToggle('C').click();
    hostFixture.detectChanges();

    expect(host.lastChange).toBeNull();
  });

  it('should reflect the initial value input', () => {
    host.value.set(['b']);
    hostFixture.detectChanges();

    expect(getToggle('B').classList).toContain('vlm-button-toggle--selected');
    expect(getToggle('A').classList).not.toContain('vlm-button-toggle--selected');
  });
});
