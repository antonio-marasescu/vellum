import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button]
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    fixture.componentRef.setInput('label', 'Save');
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.textContent?.trim()).toBe('Save');
  });

  it('should emit clicked when pressed', () => {
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();

    expect(onClicked).toHaveBeenCalledTimes(1);
  });

  it('should not emit clicked when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
    button.click();

    expect(onClicked).not.toHaveBeenCalled();
  });

  it('should not set an id attribute when id is not provided', () => {
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.hasAttribute('id')).toBe(false);
  });

  it('should not render a visible label for the fab variant', () => {
    fixture.componentRef.setInput('label', 'Add');
    fixture.componentRef.setInput('variant', 'fab');
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.querySelector('.vlm-button__label')).toBeNull();
    expect(button.getAttribute('aria-label')).toBe('Add');
  });
});
