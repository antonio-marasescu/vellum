import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Chip } from './chip';

@Component({
  imports: [Chip],
  template: `<vlm-chip>Angular</vlm-chip>`
})
class ChipHost {}

describe('Chip', () => {
  let component: Chip;
  let fixture: ComponentFixture<Chip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chip, ChipHost]
    }).compileComponents();

    fixture = TestBed.createComponent(Chip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projected content', async () => {
    const hostFixture = TestBed.createComponent(ChipHost);
    await hostFixture.whenStable();
    hostFixture.detectChanges();

    expect(hostFixture.nativeElement.textContent?.trim()).toContain('Angular');
  });

  it('should emit clicked when pressed', () => {
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const chip: HTMLElement = fixture.nativeElement.querySelector('.vlm-chip');
    chip.click();

    expect(onClicked).toHaveBeenCalledTimes(1);
  });

  it('should not emit clicked when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const chip: HTMLElement = fixture.nativeElement.querySelector('.vlm-chip');
    chip.click();

    expect(onClicked).not.toHaveBeenCalled();
  });

  it('should emit clicked on Enter and Space keydown', () => {
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const chip: HTMLElement = fixture.nativeElement.querySelector('.vlm-chip');
    chip.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    chip.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));

    expect(onClicked).toHaveBeenCalledTimes(2);
  });

  it('should not render a remove button by default', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-chip__remove')).toBeNull();
  });

  it('should render a remove button when removable', () => {
    fixture.componentRef.setInput('removable', true);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-chip__remove')).not.toBeNull();
  });

  it('should emit removed, not clicked, when the remove button is pressed', () => {
    fixture.componentRef.setInput('removable', true);
    const onClicked = vi.fn();
    const onRemoved = vi.fn();
    component.clicked.subscribe(onClicked);
    component.removed.subscribe(onRemoved);
    fixture.detectChanges();

    const removeButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.vlm-chip__remove');
    removeButton.click();

    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onClicked).not.toHaveBeenCalled();
  });

  it('should not emit removed when disabled', () => {
    fixture.componentRef.setInput('removable', true);
    fixture.componentRef.setInput('disabled', true);
    const onRemoved = vi.fn();
    component.removed.subscribe(onRemoved);
    fixture.detectChanges();

    const removeButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.vlm-chip__remove');
    expect(removeButton.disabled).toBe(true);
  });

  it('should not set an id attribute when id is not provided', () => {
    fixture.detectChanges();

    const chip: HTMLElement = fixture.nativeElement.querySelector('.vlm-chip');
    expect(chip.hasAttribute('id')).toBe(false);
  });

  it('should not be focusable when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const chip: HTMLElement = fixture.nativeElement.querySelector('.vlm-chip');
    expect(chip.hasAttribute('tabindex')).toBe(false);
  });

  it('should not emit clicked, have a button role, or be focusable when not clickable', () => {
    fixture.componentRef.setInput('clickable', false);
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const chip: HTMLElement = fixture.nativeElement.querySelector('.vlm-chip');
    chip.click();
    chip.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(onClicked).not.toHaveBeenCalled();
    expect(chip.hasAttribute('role')).toBe(false);
    expect(chip.hasAttribute('tabindex')).toBe(false);
  });

  it('should still be removable when not clickable', () => {
    fixture.componentRef.setInput('clickable', false);
    fixture.componentRef.setInput('removable', true);
    const onRemoved = vi.fn();
    component.removed.subscribe(onRemoved);
    fixture.detectChanges();

    const removeButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.vlm-chip__remove');
    removeButton.click();

    expect(onRemoved).toHaveBeenCalledTimes(1);
  });
});
