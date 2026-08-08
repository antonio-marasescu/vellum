import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Dropdown } from './dropdown';

describe('Dropdown', () => {
  let component: Dropdown;
  let fixture: ComponentFixture<Dropdown>;

  const items = [
    { key: 'a', value: 'Option A' },
    { key: 'b', value: 'Option B' }
  ];

  const getMenuPanel = (): HTMLElement | null =>
    document.querySelector<HTMLElement>('.vlm-dropdown__panel');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dropdown]
    }).compileComponents();

    fixture = TestBed.createComponent(Dropdown);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', items);
    await fixture.whenStable();
  });

  afterEach(() => {
    document.querySelectorAll('.cdk-overlay-container').forEach(el => el.remove());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render the menu initially', () => {
    fixture.detectChanges();

    expect(getMenuPanel()).toBeNull();
  });

  it('should emit clicked and open the menu when the trigger is clicked', () => {
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    trigger.click();
    fixture.detectChanges();

    expect(onClicked).toHaveBeenCalledTimes(1);
    expect(getMenuPanel()).not.toBeNull();
  });

  it('should render one item per entry with its label', () => {
    fixture.detectChanges();

    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    trigger.click();
    fixture.detectChanges();

    const menuItems = getMenuPanel()!.querySelectorAll<HTMLButtonElement>('.vlm-dropdown__item');
    expect(menuItems.length).toBe(2);
    expect(menuItems[0].textContent?.trim()).toBe('Option A');
    expect(menuItems[1].textContent?.trim()).toBe('Option B');
  });

  it('should emit selected with the item key and close the menu when an item is clicked', () => {
    const onSelected = vi.fn();
    component.selected.subscribe(onSelected);
    fixture.detectChanges();

    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    trigger.click();
    fixture.detectChanges();

    const menuItem = getMenuPanel()!.querySelector<HTMLButtonElement>('.vlm-dropdown__item')!;
    menuItem.click();
    fixture.detectChanges();

    expect(onSelected).toHaveBeenCalledWith('a');
    expect(getMenuPanel()).toBeNull();
  });

  it('should toggle the menu closed when the trigger is clicked again', () => {
    fixture.detectChanges();

    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    trigger.click();
    fixture.detectChanges();
    expect(getMenuPanel()).not.toBeNull();

    trigger.click();
    fixture.detectChanges();
    expect(getMenuPanel()).toBeNull();
  });

  it('should not open the menu when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    const onClicked = vi.fn();
    component.clicked.subscribe(onClicked);
    fixture.detectChanges();

    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(trigger.disabled).toBe(true);
    trigger.click();
    fixture.detectChanges();

    expect(onClicked).not.toHaveBeenCalled();
    expect(getMenuPanel()).toBeNull();
  });
});
