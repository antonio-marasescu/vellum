import { Component, computed, input, output } from '@angular/core';
import type { ToastTheme, ToastVariant } from '../../../types/feedback/toast.types';
import {
  BASE_CLASSES,
  DISABLED_CLASSES,
  VARIANT_THEME_CLASSES
} from '../../../theming/feedback/toast.theming';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-toast',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './toast.html',
  styleUrl: './_toast.tokens.css'
})
export class Toast {
  readonly theme = input<ToastTheme>('primary');
  readonly variant = input<ToastVariant>('basic');
  readonly removable = input(false);
  readonly disabled = input(false);
  readonly id = input<string>();

  readonly removed = output<void>();

  protected readonly toastClasses = computed(() =>
    cx(
      BASE_CLASSES,
      VARIANT_THEME_CLASSES[this.variant()][this.theme()],
      this.disabled() ? DISABLED_CLASSES : ''
    )
  );

  protected onRemove(): void {
    if (this.disabled()) {
      return;
    }
    this.removed.emit();
  }
}
