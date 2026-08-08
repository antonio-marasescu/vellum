import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Divider } from './divider';

describe('Divider', () => {
  let component: Divider;
  let fixture: ComponentFixture<Divider>;

  const getLine = (): HTMLElement => fixture.nativeElement.querySelector('.vlm-divider');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Divider]
    }).compileComponents();

    fixture = TestBed.createComponent(Divider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render as a horizontal separator by default', () => {
    fixture.detectChanges();

    const host: HTMLElement = fixture.nativeElement;
    const line = getLine();
    expect(line.getAttribute('role')).toBe('separator');
    expect(line.getAttribute('aria-orientation')).toBe('horizontal');
    expect(host.classList).toContain('block');
    expect(line.classList).toContain('w-full');
  });

  it('should render as a vertical separator when vertical is true', () => {
    fixture.componentRef.setInput('vertical', true);
    fixture.detectChanges();

    const host: HTMLElement = fixture.nativeElement;
    const line = getLine();
    expect(line.getAttribute('aria-orientation')).toBe('vertical');
    expect(host.classList).toContain('inline-block');
    expect(line.classList).toContain('h-full');
  });

  it('should apply an inset margin when inset is true', () => {
    fixture.componentRef.setInput('inset', true);
    fixture.detectChanges();

    expect(getLine().classList).toContain('ms-[length:var(--vlm-divider-inset-size)]');
  });

  it('should not apply an inset margin by default', () => {
    fixture.detectChanges();

    expect(getLine().className).not.toContain('inset-size');
  });

  it('should reflect the width input as a CSS custom property', () => {
    fixture.componentRef.setInput('width', 4);
    fixture.detectChanges();

    expect(getLine().style.getPropertyValue('--vlm-divider-width')).toBe('4px');
  });

  it('should use the neutral theme color by default', () => {
    fixture.detectChanges();

    expect(getLine().classList).toContain('border-[color:var(--vlm-divider-neutral-color)]');
  });

  it('should use the primary theme color when set', () => {
    fixture.componentRef.setInput('theme', 'primary');
    fixture.detectChanges();

    expect(getLine().classList).toContain('border-[color:var(--vlm-divider-primary-color)]');
  });

  it('should use the secondary theme color when set', () => {
    fixture.componentRef.setInput('theme', 'secondary');
    fixture.detectChanges();

    expect(getLine().classList).toContain('border-[color:var(--vlm-divider-secondary-color)]');
  });
});
