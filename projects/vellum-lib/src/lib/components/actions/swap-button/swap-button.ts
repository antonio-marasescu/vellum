import { Component, computed, input, model, output } from '@angular/core';
import type { SwapButtonSize } from '../../../types/actions/swap-button.types';
import {
  BASE_CLASSES,
  ICON_ACTIVE_CLASSES,
  ICON_BASE_CLASSES,
  ICON_INACTIVE_CLASSES,
  SIZE_CLASSES
} from '../../../theming/actions/swap-button.theming';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-swap-button',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './swap-button.html',
  styleUrl: './_swap-button.tokens.css'
})
export class SwapButton {
  readonly swapped = model(false);
  readonly size = input<SwapButtonSize>('md');
  readonly disabled = input(false);
  readonly id = input<string>();

  readonly clicked = output<void>();

  protected readonly buttonClasses = computed(() => cx(BASE_CLASSES, SIZE_CLASSES[this.size()]));

  protected readonly offIconClasses = computed(() =>
    cx(ICON_BASE_CLASSES, this.swapped() ? ICON_INACTIVE_CLASSES : ICON_ACTIVE_CLASSES)
  );

  protected readonly onIconClasses = computed(() =>
    cx(ICON_BASE_CLASSES, this.swapped() ? ICON_ACTIVE_CLASSES : ICON_INACTIVE_CLASSES)
  );

  protected onClick(): void {
    if (this.disabled()) {
      return;
    }
    this.swapped.set(!this.swapped());
    this.clicked.emit();
  }
}
