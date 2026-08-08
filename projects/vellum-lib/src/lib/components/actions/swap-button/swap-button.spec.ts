import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { SwapButton } from './swap-button';

describe('SwapButton', () => {
  let component: SwapButton;
  let fixture: ComponentFixture<SwapButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwapButton]
    }).compileComponents();

    fixture = TestBed.createComponent(SwapButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to not swapped', () => {
    fixture.detectChanges();

    expect(component.swapped()).toBe(false);
  });

  it('should toggle swapped and emit clicked when pressed', () => {
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.swapped()).toBe(true);
    expect(onClicked).toHaveBeenCalledTimes(1);

    button.click();

    expect(component.swapped()).toBe(false);
    expect(onClicked).toHaveBeenCalledTimes(2);
  });

  it('should not toggle or emit clicked when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
    button.click();

    expect(component.swapped()).toBe(false);
    expect(onClicked).not.toHaveBeenCalled();
  });

  it('should support two-way binding via the swapped model', () => {
    fixture.componentRef.setInput('swapped', true);
    fixture.detectChanges();

    expect(component.swapped()).toBe(true);
  });

  it('should not set an id attribute when id is not provided', () => {
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.hasAttribute('id')).toBe(false);
  });
});
