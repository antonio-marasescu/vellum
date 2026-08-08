import { Component, computed, input, output } from '@angular/core';
import type { ChipSize, ChipTheme } from '../../types/chip.types';
import {
  BASE_CLASSES,
  DISABLED_CLASSES,
  ENABLED_CLASSES,
  SIZE_CLASSES,
  THEME_BASE_CLASSES,
  THEME_HIGHLIGHTED_CLASSES,
  THEME_HOVER_VARIANT_CLASSES
} from '../../theming/chip.theming';
import { cx } from '../../utils/class-names';

@Component({
  selector: 'vlm-chip',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './chip.html',
  styleUrl: './_chip.tokens.css'
})
export class Chip {
  readonly size = input<ChipSize>('md');
  readonly theme = input<ChipTheme>('primary');
  readonly clickable = input(true);
  readonly removable = input(false);
  readonly highlighted = input(false);
  readonly disabled = input(false);
  readonly id = input<string>();

  readonly clicked = output<void>();
  readonly removed = output<void>();

  protected readonly chipClasses = computed(() => {
    const theme = this.theme();
    const disabled = this.disabled();
    const clickable = this.clickable();
    const stateClasses =
      this.highlighted() && !disabled
        ? THEME_HIGHLIGHTED_CLASSES[theme]
        : cx(
            THEME_BASE_CLASSES[theme],
            !disabled && clickable ? THEME_HOVER_VARIANT_CLASSES[theme] : ''
          );

    return cx(
      BASE_CLASSES,
      SIZE_CLASSES[this.size()],
      stateClasses,
      disabled ? DISABLED_CLASSES : clickable ? ENABLED_CLASSES : ''
    );
  });

  protected onClick(): void {
    if (this.disabled() || !this.clickable()) {
      return;
    }
    this.clicked.emit();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (!this.clickable() || (event.key !== 'Enter' && event.key !== ' ')) {
      return;
    }
    event.preventDefault();
    this.onClick();
  }

  protected onRemove(event: Event): void {
    event.stopPropagation();
    if (this.disabled()) {
      return;
    }
    this.removed.emit();
  }
}
