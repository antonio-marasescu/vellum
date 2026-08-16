import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Icon } from './icon';

describe('Icon', () => {
  let component: Icon;
  let fixture: ComponentFixture<Icon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Icon]
    }).compileComponents();

    fixture = TestBed.createComponent(Icon);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('icon', 'heart');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render SVG element for valid icon', () => {
    fixture.componentRef.setInput('icon', 'star');
    fixture.detectChanges();
    const svgElement = fixture.nativeElement.querySelector('svg');
    expect(svgElement).toBeTruthy();
    expect(svgElement?.getAttribute('viewBox')).toBeTruthy();
  });

  it('should not render SVG for invalid icon', () => {
    fixture.componentRef.setInput('icon', 'non-existent-icon');
    fixture.detectChanges();
    const svgElement = fixture.nativeElement.querySelector('svg');
    expect(svgElement).toBeFalsy();
  });

  it('should use default size (24px for md)', () => {
    expect(component.iconSize()).toBe('24px');
  });

  it('should use custom pixel size', () => {
    fixture.componentRef.setInput('size', 32);
    fixture.detectChanges();
    expect(component.iconSize()).toBe('32px');
  });

  it('should use size token (lg = 32px)', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component.iconSize()).toBe('32px');
  });

  it('should use size token (xs = 16px)', () => {
    fixture.componentRef.setInput('size', 'xs');
    fixture.detectChanges();
    expect(component.iconSize()).toBe('16px');
  });

  it('should have viewBox attribute', () => {
    fixture.componentRef.setInput('icon', 'check');
    fixture.detectChanges();
    const svgElement = fixture.nativeElement.querySelector('svg');
    expect(svgElement?.getAttribute('viewBox')).toBeTruthy();
  });

  it('should use currentColor for stroke', () => {
    fixture.componentRef.setInput('icon', 'check');
    fixture.detectChanges();
    const svgElement = fixture.nativeElement.querySelector('svg');
    expect(svgElement?.getAttribute('stroke')).toBe('currentColor');
  });

  it('should use default neutral theme', () => {
    expect(component.theme()).toBe('neutral');
  });

  it('should accept custom theme', () => {
    fixture.componentRef.setInput('theme', 'primary');
    fixture.detectChanges();
    expect(component.theme()).toBe('primary');
  });

  it('should update host element size via CSS variable', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    const style = window.getComputedStyle(hostElement);
    expect(style.getPropertyValue('--vlm-icon-size')).toBe('32px');
  });

  it('should set fill on SVG element to currentColor', () => {
    fixture.componentRef.setInput('icon', 'account');
    fixture.detectChanges();
    const svgElement = fixture.nativeElement.querySelector('svg');
    expect(svgElement?.getAttribute('fill')).toBe('currentColor');
  });
});
