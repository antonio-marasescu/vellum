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
    expect(svgElement?.classList.contains('vlm-icon-svg')).toBe(true);
  });

  it('should return null for invalid icon', () => {
    fixture.componentRef.setInput('icon', 'non-existent-icon' as any);
    fixture.detectChanges();
    expect(component.parsedSvg()).toBeNull();
  });

  it('should use default size', () => {
    expect(component.iconSize()).toBe('var(--vlm-icon-size-md)');
  });

  it('should use custom pixel size', () => {
    fixture.componentRef.setInput('size', 32);
    fixture.detectChanges();
    expect(component.iconSize()).toBe('32px');
  });

  it('should use size token', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component.iconSize()).toBe('var(--vlm-icon-size-lg)');
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
});
