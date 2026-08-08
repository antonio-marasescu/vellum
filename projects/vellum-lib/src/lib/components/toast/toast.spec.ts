import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Toast } from './toast';

@Component({
  imports: [Toast],
  template: `<vlm-toast>Saved successfully</vlm-toast>`
})
class ToastHost {}

describe('Toast', () => {
  let component: Toast;
  let fixture: ComponentFixture<Toast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toast, ToastHost]
    }).compileComponents();

    fixture = TestBed.createComponent(Toast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projected content', async () => {
    const hostFixture = TestBed.createComponent(ToastHost);
    await hostFixture.whenStable();
    hostFixture.detectChanges();

    expect(hostFixture.nativeElement.textContent?.trim()).toContain('Saved successfully');
  });

  it('should have a status role for a11y announcements', () => {
    fixture.detectChanges();

    const toast: HTMLElement = fixture.nativeElement.querySelector('.vlm-toast');
    expect(toast.getAttribute('role')).toBe('status');
    expect(toast.getAttribute('aria-live')).toBe('polite');
  });

  it('should not render a remove button by default', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-toast__remove')).toBeNull();
  });

  it('should render a remove button when removable', () => {
    fixture.componentRef.setInput('removable', true);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-toast__remove')).not.toBeNull();
  });

  it('should emit removed when the remove button is pressed', () => {
    fixture.componentRef.setInput('removable', true);
    const onRemoved = vi.fn();
    component.removed.subscribe(onRemoved);
    fixture.detectChanges();

    const removeButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.vlm-toast__remove');
    removeButton.click();

    expect(onRemoved).toHaveBeenCalledTimes(1);
  });

  it('should not emit removed when disabled', () => {
    fixture.componentRef.setInput('removable', true);
    fixture.componentRef.setInput('disabled', true);
    const onRemoved = vi.fn();
    component.removed.subscribe(onRemoved);
    fixture.detectChanges();

    const removeButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.vlm-toast__remove');
    expect(removeButton.disabled).toBe(true);
  });

  it('should not set an id attribute when id is not provided', () => {
    fixture.detectChanges();

    const toast: HTMLElement = fixture.nativeElement.querySelector('.vlm-toast');
    expect(toast.hasAttribute('id')).toBe(false);
  });

  it('should apply the primary theme by default', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-toast').classList).toContain(
      'bg-[color:var(--vlm-toast-primary-bg)]'
    );
  });

  it('should apply outlined variant classes', () => {
    fixture.componentRef.setInput('variant', 'outlined');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-toast').classList).toContain(
      'border-[color:var(--vlm-toast-primary-color)]'
    );
  });
});
