import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Avatar } from './avatar';

describe('Avatar', () => {
  let component: Avatar;
  let fixture: ComponentFixture<Avatar>;

  const getAvatar = (): HTMLElement => fixture.nativeElement.querySelector('.vlm-avatar');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avatar]
    }).compileComponents();

    fixture = TestBed.createComponent(Avatar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an image when useUrl is true and url is set', () => {
    fixture.componentRef.setInput('url', 'https://example.com/avatar.png');
    fixture.detectChanges();

    const img: HTMLImageElement = fixture.nativeElement.querySelector('.vlm-avatar__image');
    expect(img).not.toBeNull();
    expect(img.src).toBe('https://example.com/avatar.png');
  });

  it('should render the placeholder when useUrl is false', () => {
    fixture.componentRef.setInput('useUrl', false);
    fixture.componentRef.setInput('placeholder', 'AB');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-avatar__image')).toBeNull();
    expect(
      fixture.nativeElement.querySelector('.vlm-avatar__placeholder').textContent?.trim()
    ).toBe('AB');
  });

  it('should render the placeholder when useUrl is true but no url is set', () => {
    fixture.componentRef.setInput('placeholder', 'AB');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vlm-avatar__image')).toBeNull();
  });

  it('should not have a button role or tabindex when not clickable', () => {
    fixture.detectChanges();

    const avatar = getAvatar();
    expect(avatar.hasAttribute('role')).toBe(false);
    expect(avatar.hasAttribute('tabindex')).toBe(false);
  });

  it('should have a button role and tabindex when clickable', () => {
    fixture.componentRef.setInput('clickable', true);
    fixture.detectChanges();

    const avatar = getAvatar();
    expect(avatar.getAttribute('role')).toBe('button');
    expect(avatar.getAttribute('tabindex')).toBe('0');
  });

  it('should emit clicked when clickable and pressed', () => {
    fixture.componentRef.setInput('clickable', true);
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    getAvatar().click();

    expect(onClicked).toHaveBeenCalledTimes(1);
  });

  it('should not emit clicked when not clickable', () => {
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    getAvatar().click();

    expect(onClicked).not.toHaveBeenCalled();
  });

  it('should emit clicked on Enter and Space keydown when clickable', () => {
    fixture.componentRef.setInput('clickable', true);
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const avatar = getAvatar();
    avatar.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    avatar.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));

    expect(onClicked).toHaveBeenCalledTimes(2);
  });

  it('should apply the round variant by default', () => {
    fixture.detectChanges();

    expect(getAvatar().classList).toContain('rounded-full');
  });

  it('should apply the square variant', () => {
    fixture.componentRef.setInput('variant', 'square');
    fixture.detectChanges();

    expect(getAvatar().classList).toContain('rounded-none');
  });
});
