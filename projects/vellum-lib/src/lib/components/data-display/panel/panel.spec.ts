import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel } from './panel';

@Component({
  imports: [Panel],
  template: `
    <vlm-panel>
      <span panelHeader>Header</span>
      Body content
    </vlm-panel>
  `
})
class PanelHost {}

describe('Panel', () => {
  let component: Panel;
  let fixture: ComponentFixture<Panel>;

  const getHeader = (): HTMLElement => fixture.nativeElement.querySelector('.vlm-panel__header');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panel, PanelHost]
    }).compileComponents();

    fixture = TestBed.createComponent(Panel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projected header and body content', async () => {
    const hostFixture = TestBed.createComponent(PanelHost);
    await hostFixture.whenStable();
    hostFixture.detectChanges();

    expect(hostFixture.nativeElement.textContent).toContain('Header');
    expect(hostFixture.nativeElement.textContent).toContain('Body content');
  });

  it('should be collapsed by default', () => {
    fixture.detectChanges();

    expect(component.expanded()).toBe(false);
    expect(getHeader().getAttribute('aria-expanded')).toBe('false');
  });

  it('should toggle expanded when the header is clicked', () => {
    fixture.detectChanges();

    getHeader().click();
    fixture.detectChanges();
    expect(component.expanded()).toBe(true);
    expect(getHeader().getAttribute('aria-expanded')).toBe('true');

    getHeader().click();
    fixture.detectChanges();
    expect(component.expanded()).toBe(false);
  });

  it('should toggle expanded on Enter and Space keydown', () => {
    fixture.detectChanges();

    const header = getHeader();
    header.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    fixture.detectChanges();
    expect(component.expanded()).toBe(true);

    header.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    fixture.detectChanges();
    expect(component.expanded()).toBe(false);
  });

  it('should support two-way binding via the expanded model', () => {
    fixture.componentRef.setInput('expanded', true);
    fixture.detectChanges();

    expect(getHeader().getAttribute('aria-expanded')).toBe('true');
  });

  it('should not toggle or expose a button role when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const header = getHeader();
    expect(header.hasAttribute('role')).toBe(false);
    expect(header.hasAttribute('tabindex')).toBe(false);

    header.click();
    fixture.detectChanges();
    expect(component.expanded()).toBe(false);
  });

  it('should not set an id attribute when id is not provided', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-panel').hasAttribute('id')).toBe(false);
  });

  it('should link the header to the body via aria-controls when id is provided', () => {
    fixture.componentRef.setInput('id', 'faq-1');
    fixture.detectChanges();

    expect(getHeader().getAttribute('aria-controls')).toBe('faq-1-content');
    expect(fixture.nativeElement.querySelector('#faq-1-content')).not.toBeNull();
  });
});
