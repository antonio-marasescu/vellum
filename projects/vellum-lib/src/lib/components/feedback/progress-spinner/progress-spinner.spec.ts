import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinner } from './progress-spinner';

describe('ProgressSpinner', () => {
  let component: ProgressSpinner;
  let fixture: ComponentFixture<ProgressSpinner>;

  const getArc = (): SVGCircleElement =>
    fixture.nativeElement.querySelector('.vlm-progress-spinner__arc');
  const getSvg = (): SVGSVGElement => fixture.nativeElement.querySelector('svg');
  const getLoader = (): HTMLElement =>
    fixture.nativeElement.querySelector('.vlm-progress-spinner__loader');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressSpinner]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressSpinner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should size the loader and set the theme color when indeterminate', () => {
    fixture.componentRef.setInput('diameter', 64);
    fixture.componentRef.setInput('strokeWidth', 8);
    fixture.componentRef.setInput('theme', 'success');
    fixture.detectChanges();

    const loader = getLoader();
    expect(loader.style.width).toBe('64px');
    expect(loader.style.height).toBe('64px');
    expect(loader.style.getPropertyValue('--vlm-progress-spinner-border-width')).toBe('8px');
    expect(loader.style.getPropertyValue('--vlm-progress-spinner-inner-inset')).toBe('10px');
    expect(loader.style.getPropertyValue('--vlm-progress-spinner-inner-color')).toBe(
      'var(--vlm-progress-spinner-success-color)'
    );
    expect(loader.getAttribute('role')).toBe('progressbar');
  });

  it('should not render the determinate svg when indeterminate', () => {
    fixture.detectChanges();

    expect(getSvg()).toBeNull();
  });

  it('should render a determinate arc, not the loader, in determinate mode', () => {
    fixture.componentRef.setInput('mode', 'determinate');
    fixture.componentRef.setInput('value', 50);
    fixture.detectChanges();

    expect(getLoader()).toBeNull();

    const arc = getArc();
    const outerRadius = (40 - 4) / 2;
    const innerRadius = outerRadius - (4 + 2);
    const innerCircumference = 2 * Math.PI * innerRadius;
    const expectedOffset = innerCircumference * 0.5;
    expect(Number(arc.getAttribute('r'))).toBeCloseTo(innerRadius, 5);
    expect(Number(arc.getAttribute('stroke-dashoffset'))).toBeCloseTo(expectedOffset, 5);
    expect(getSvg().getAttribute('aria-valuenow')).toBe('50');
  });

  it('should clamp determinate value to the 0-100 range', () => {
    fixture.componentRef.setInput('mode', 'determinate');
    fixture.componentRef.setInput('value', 150);
    fixture.detectChanges();

    expect(Number(getArc().getAttribute('stroke-dashoffset'))).toBeCloseTo(0, 5);
  });

  it('should size the determinate svg from the diameter input', () => {
    fixture.componentRef.setInput('mode', 'determinate');
    fixture.componentRef.setInput('diameter', 64);
    fixture.detectChanges();

    const svg = getSvg();
    expect(svg.getAttribute('width')).toBe('64');
    expect(svg.getAttribute('height')).toBe('64');
  });
});
