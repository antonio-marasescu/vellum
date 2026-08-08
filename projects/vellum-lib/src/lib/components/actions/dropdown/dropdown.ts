import { Overlay, OverlayModule, type OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  ElementRef,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  inject,
  input,
  output
} from '@angular/core';
import type { ButtonSize, ButtonTheme, ButtonVariant } from '../../../types/actions/button.types';
import type { DropdownItem } from '../../../types/actions/dropdown.types';
import { ITEM_BASE_CLASSES, PANEL_CLASSES } from '../../../theming/actions/dropdown.theming';
import { Button } from '../button/button';

@Component({
  selector: 'vlm-dropdown',
  imports: [Button, OverlayModule],
  host: { class: 'inline-flex' },
  templateUrl: './dropdown.html',
  styleUrl: './_dropdown.tokens.css'
})
export class Dropdown implements OnDestroy {
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  @ViewChild('trigger', { read: ElementRef })
  private readonly triggerRef!: ElementRef<HTMLElement>;

  @ViewChild('menu')
  private readonly menuRef!: TemplateRef<unknown>;

  readonly label = input<string>();
  readonly size = input<ButtonSize>('md');
  readonly disabled = input(false);
  readonly theme = input<ButtonTheme>('primary');
  readonly variant = input<ButtonVariant>('basic');
  readonly useIcon = input(false);
  readonly id = input<string>();
  readonly items = input<readonly DropdownItem[]>([]);

  readonly clicked = output<void>();
  readonly selected = output<string>();

  protected readonly panelClasses = PANEL_CLASSES;
  protected readonly itemClasses = ITEM_BASE_CLASSES;

  private overlayRef: OverlayRef | null = null;

  ngOnDestroy(): void {
    this.overlayRef?.dispose();
  }

  protected onTriggerClick(): void {
    this.clicked.emit();
    if (this.disabled()) {
      return;
    }
    if (this.overlayRef?.hasAttached()) {
      this.closeMenu();
      return;
    }
    this.openMenu();
  }

  protected onItemSelected(item: DropdownItem): void {
    this.selected.emit(item.key);
    this.closeMenu();
  }

  private openMenu(): void {
    const overlayRef = this.overlayRef ?? this.createOverlay();
    this.overlayRef = overlayRef;

    const portal = new TemplatePortal(this.menuRef, this.viewContainerRef);
    overlayRef.attach(portal);
  }

  private closeMenu(): void {
    this.overlayRef?.detach();
  }

  private createOverlay(): OverlayRef {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.triggerRef)
      .withPositions([
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 4 },
        { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -4 }
      ])
      .withFlexibleDimensions(false)
      .withPush(true);

    const overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });

    overlayRef.backdropClick().subscribe(() => this.closeMenu());
    overlayRef.keydownEvents().subscribe(event => {
      if (event.key === 'Escape') {
        this.closeMenu();
      }
    });

    return overlayRef;
  }
}
