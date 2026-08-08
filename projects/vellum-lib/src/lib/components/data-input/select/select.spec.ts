import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Select } from './select';

@Component({
  imports: [Select],
  template: `
    <vlm-select id="test-id">
      <option value="a">A</option>
      <option value="b">B</option>
    </vlm-select>
  `
})
class SelectHost {}

describe('Select', () => {
  let component: Select;
  let fixture: ComponentFixture<Select>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Select]
    }).compileComponents();

    fixture = TestBed.createComponent(Select);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-id');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    fixture.componentRef.setInput('label', 'Country');
    fixture.detectChanges();

    const label: HTMLLabelElement = fixture.nativeElement.querySelector('.vlm-select__label');
    expect(label.textContent?.trim()).toBe('Country');
  });

  it('should render projected options', async () => {
    const hostFixture = TestBed.createComponent(SelectHost);
    await hostFixture.whenStable();
    hostFixture.detectChanges();

    const options: NodeListOf<HTMLOptionElement> =
      hostFixture.nativeElement.querySelectorAll('option');
    expect(options.length).toBe(2);
  });

  it('should update the value model when the user selects an option', async () => {
    const hostFixture = TestBed.createComponent(SelectHost);
    await hostFixture.whenStable();
    hostFixture.detectChanges();

    const select: HTMLSelectElement = hostFixture.nativeElement.querySelector('select');
    select.value = 'b';
    select.dispatchEvent(new Event('change'));

    const selectComponent = hostFixture.debugElement.children[0].componentInstance as Select;
    expect(selectComponent.value()).toBe('b');
  });

  it('should disable the native select when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select.disabled).toBe(true);
  });

  it('should render a required marker when required', () => {
    fixture.componentRef.setInput('label', 'Country');
    fixture.componentRef.setInput('required', true);
    fixture.detectChanges();

    const label: HTMLLabelElement = fixture.nativeElement.querySelector('.vlm-select__label');
    expect(label.textContent).toContain('*');

    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select.getAttribute('aria-required')).toBe('true');
  });

  it('should emit touch on blur', () => {
    const onTouch = vi.fn();
    component.touch.subscribe(onTouch);
    fixture.detectChanges();

    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    select.dispatchEvent(new Event('blur'));

    expect(onTouch).toHaveBeenCalledTimes(1);
  });

  it('should not display errors before the field is touched', () => {
    fixture.componentRef.setInput('errors', [{ kind: 'required', message: 'Required.' }]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-select__error')).toBeNull();
  });

  it('should display the first error message once touched', () => {
    fixture.componentRef.setInput('touched', true);
    fixture.componentRef.setInput('errors', [{ kind: 'required', message: 'Required.' }]);
    fixture.detectChanges();

    const error: HTMLElement = fixture.nativeElement.querySelector('.vlm-select__error');
    expect(error.textContent?.trim()).toBe('Required.');

    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select.getAttribute('aria-describedby')).toBe(error.id);
  });

  it('should mark the native select as invalid via aria-invalid', () => {
    fixture.componentRef.setInput('invalid', true);
    fixture.detectChanges();

    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select.getAttribute('aria-invalid')).toBe('true');
  });

  it('should use the provided id and associate the label with it', () => {
    fixture.componentRef.setInput('id', 'custom-id');
    fixture.componentRef.setInput('label', 'Country');
    fixture.detectChanges();

    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    const label: HTMLLabelElement = fixture.nativeElement.querySelector('.vlm-select__label');
    expect(select.id).toBe('custom-id');
    expect(label.getAttribute('for')).toBe('custom-id');
  });
});
