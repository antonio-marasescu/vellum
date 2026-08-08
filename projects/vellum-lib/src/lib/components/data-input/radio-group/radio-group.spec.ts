import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Radio } from './radio/radio';
import { RadioGroup } from './radio-group';

@Component({
  imports: [RadioGroup, Radio],
  template: `
    <vlm-radio-group [disabled]="disabled()" [value]="value()" (valueChange)="onChange($event)">
      <vlm-radio value="a" label="A"></vlm-radio>
      <vlm-radio value="b" label="B"></vlm-radio>
      <vlm-radio value="c" label="C" [disabled]="cDisabled()"></vlm-radio>
    </vlm-radio-group>
  `
})
class RadioGroupHost {
  readonly disabled = signal(false);
  readonly cDisabled = signal(false);
  readonly value = signal('');
  lastChange: string | null = null;

  onChange(value: string): void {
    this.lastChange = value;
  }
}

describe('RadioGroup', () => {
  let hostFixture: ComponentFixture<RadioGroupHost>;
  let host: RadioGroupHost;

  const getRadio = (label: string): HTMLInputElement =>
    Array.from(hostFixture.nativeElement.querySelectorAll('.vlm-radio__wrapper'))
      .find(
        (wrapper): wrapper is HTMLLabelElement =>
          (wrapper as HTMLLabelElement).textContent?.trim() === label
      )
      ?.querySelector('input') as HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupHost]
    }).compileComponents();

    hostFixture = TestBed.createComponent(RadioGroupHost);
    host = hostFixture.componentInstance;
    await hostFixture.whenStable();
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(host).toBeTruthy();
  });

  it('should select a radio and emit change on click', () => {
    getRadio('A').dispatchEvent(new Event('change'));
    hostFixture.detectChanges();

    expect(host.lastChange).toBe('a');
    expect(getRadio('A').checked).toBe(true);
  });

  it('should switch selection exclusively', () => {
    getRadio('A').dispatchEvent(new Event('change'));
    hostFixture.detectChanges();
    getRadio('B').dispatchEvent(new Event('change'));
    hostFixture.detectChanges();

    expect(host.lastChange).toBe('b');
    expect(getRadio('A').checked).toBe(false);
    expect(getRadio('B').checked).toBe(true);
  });

  it('should not select or emit when the group is disabled', () => {
    host.disabled.set(true);
    hostFixture.detectChanges();

    expect(getRadio('A').disabled).toBe(true);
  });

  it('should not select or emit when an individual radio is disabled', () => {
    host.cDisabled.set(true);
    hostFixture.detectChanges();

    expect(getRadio('C').disabled).toBe(true);
  });

  it('should reflect the initial value input', () => {
    host.value.set('b');
    hostFixture.detectChanges();

    expect(getRadio('B').checked).toBe(true);
    expect(getRadio('A').checked).toBe(false);
  });

  it('should emit touch on blur of a radio', () => {
    const onTouch = vi.fn();
    const group = hostFixture.debugElement.children[0].injector.get(RadioGroup);
    group.touch.subscribe(onTouch);

    getRadio('A').dispatchEvent(new Event('blur'));

    expect(onTouch).toHaveBeenCalledTimes(1);
  });
});
