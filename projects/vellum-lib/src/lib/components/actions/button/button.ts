import { Component, computed, input, output } from '@angular/core';
import type { ButtonSize, ButtonTheme, ButtonVariant } from '../../../types/actions/button.types';
import {
  BASE_CLASSES,
  FAB_SIZE_CLASSES,
  FAMILY_BY_VARIANT,
  FAMILY_THEME_CLASSES,
  SIZE_CLASSES
} from '../../../theming/actions/button.theming';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-button',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './button.html',
  styleUrl: './_button.tokens.css'
})
export class Button {
  readonly label = input<string>();
  readonly size = input<ButtonSize>('md');
  readonly disabled = input(false);
  readonly theme = input<ButtonTheme>('primary');
  readonly variant = input<ButtonVariant>('basic');
  readonly useIcon = input(false);
  readonly id = input<string>();

  readonly clicked = output<void>();

  protected readonly isFab = computed(
    () => this.variant() === 'fab' || this.variant() === 'fab-outlined'
  );

  protected readonly buttonClasses = computed(() => {
    const fab = this.isFab();
    const family = FAMILY_BY_VARIANT[this.variant()];

    return cx(
      BASE_CLASSES,
      fab
        ? 'vlm-button--fab rounded-[var(--vlm-button-radius-fab)] p-0'
        : SIZE_CLASSES[this.size()],
      fab ? FAB_SIZE_CLASSES[this.size()] : '',
      FAMILY_THEME_CLASSES[family][this.theme()]
    );
  });

  protected onClick(): void {
    if (this.disabled()) {
      return;
    }
    this.clicked.emit();
  }
}
