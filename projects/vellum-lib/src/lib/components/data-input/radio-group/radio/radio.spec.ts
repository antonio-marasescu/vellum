import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroup } from '../radio-group';
import { Radio } from './radio';

@Component({
  imports: [RadioGroup, Radio],
  template: `
    <vlm-radio-group [value]="value()">
      <vlm-radio value="a" label="Angular"></vlm-radio>
    </vlm-radio-group>
  `
})
class RadioHost {
  readonly value = signal('');
}

describe('Radio', () => {
  let hostFixture: ComponentFixture<RadioHost>;
  let host: RadioHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioHost]
    }).compileComponents();

    hostFixture = TestBed.createComponent(RadioHost);
    host = hostFixture.componentInstance;
    await hostFixture.whenStable();
    hostFixture.detectChanges();
  });

  it('should require a RadioGroup ancestor', () => {
    expect(() => TestBed.createComponent(Radio)).toThrow();
  });

  it('should render the label', () => {
    expect(hostFixture.nativeElement.querySelector('.vlm-radio__wrapper').textContent?.trim()).toBe(
      'Angular'
    );
  });

  it('should reflect the selected state from the group value', () => {
    host.value.set('a');
    hostFixture.detectChanges();

    const input: HTMLInputElement = hostFixture.nativeElement.querySelector('input');
    expect(input.checked).toBe(true);
  });
});
