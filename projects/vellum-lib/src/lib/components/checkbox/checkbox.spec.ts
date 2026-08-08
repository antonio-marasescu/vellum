import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  let component: Checkbox;
  let fixture: ComponentFixture<Checkbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkbox]
    }).compileComponents();

    fixture = TestBed.createComponent(Checkbox);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-id');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    fixture.componentRef.setInput('label', 'Accept terms');
    fixture.detectChanges();

    const label: HTMLLabelElement = fixture.nativeElement.querySelector('.vlm-checkbox__wrapper');
    expect(label.textContent?.trim()).toContain('Accept terms');
  });

  it('should render the native input checked state from the checked model', () => {
    fixture.componentRef.setInput('checked', true);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.checked).toBe(true);
  });

  it('should update the checked model when the user clicks', () => {
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.checked = true;
    input.dispatchEvent(new Event('change'));

    expect(component.checked()).toBe(true);
  });

  it('should disable the native input when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.disabled).toBe(true);
  });

  it('should render a required marker when required', () => {
    fixture.componentRef.setInput('label', 'Name');
    fixture.componentRef.setInput('required', true);
    fixture.detectChanges();

    const label: HTMLLabelElement = fixture.nativeElement.querySelector('.vlm-checkbox__wrapper');
    expect(label.textContent).toContain('*');

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('aria-required')).toBe('true');
  });

  it('should emit touch on blur', () => {
    const onTouch = vi.fn();
    component.touch.subscribe(onTouch);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('blur'));

    expect(onTouch).toHaveBeenCalledTimes(1);
  });

  it('should not display errors before the field is touched', () => {
    fixture.componentRef.setInput('errors', [{ kind: 'required', message: 'Required.' }]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-checkbox__error')).toBeNull();
  });

  it('should display the first error message once touched', () => {
    fixture.componentRef.setInput('touched', true);
    fixture.componentRef.setInput('errors', [{ kind: 'required', message: 'Required.' }]);
    fixture.detectChanges();

    const error: HTMLElement = fixture.nativeElement.querySelector('.vlm-checkbox__error');
    expect(error.textContent?.trim()).toBe('Required.');

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('aria-describedby')).toBe(error.id);
  });

  it('should mark the native input as invalid via aria-invalid', () => {
    fixture.componentRef.setInput('invalid', true);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('should use the provided id and associate the label with it', () => {
    fixture.componentRef.setInput('id', 'custom-id');
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.id).toBe('custom-id');
  });
});
