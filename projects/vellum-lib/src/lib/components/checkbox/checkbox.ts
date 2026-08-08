import { Component, computed, input, model, output } from '@angular/core';
import type { FormCheckboxControl, ValidationError } from '@angular/forms/signals';
import type { CheckboxSize, CheckboxTheme } from '../../types/checkbox.types';
import {
  BASE_CLASSES,
  CHECKED_CLASSES,
  DISABLED_CLASSES,
  ENABLED_CLASSES,
  INVALID_CLASSES,
  LABEL_FONT_SIZE_CLASSES,
  SIZE_CLASSES,
  UNCHECKED_CLASSES
} from '../../theming/checkbox.theming';
import { cx } from '../../utils/class-names';

@Component({
  selector: 'vlm-checkbox',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './checkbox.html',
  styleUrl: './_checkbox.tokens.css'
})
export class Checkbox implements FormCheckboxControl {
  readonly checked = model(false);
  readonly label = input<string>();
  readonly size = input<CheckboxSize>('md');
  readonly theme = input<CheckboxTheme>('primary');
  readonly required = input(false);
  readonly id = input.required<string>();

  readonly disabled = input(false);
  readonly invalid = input(false);
  readonly touched = input(false);
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);

  readonly touch = output<void>();

  protected readonly errorId = computed(() => `${this.id()}-error`);

  protected readonly showError = computed(() => this.touched() && this.errors().length > 0);
  protected readonly errorMessage = computed(() => this.errors()[0]?.message ?? '');

  protected readonly boxClasses = computed(() => {
    const stateClasses = this.invalid()
      ? INVALID_CLASSES
      : this.checked()
        ? CHECKED_CLASSES[this.theme()]
        : UNCHECKED_CLASSES;

    return cx(
      BASE_CLASSES,
      SIZE_CLASSES[this.size()],
      stateClasses,
      this.disabled() ? DISABLED_CLASSES : ENABLED_CLASSES
    );
  });

  protected readonly labelClasses = computed(() =>
    cx(
      'vlm-checkbox__label text-[color:var(--vlm-checkbox-label-color)] font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-checkbox-font-weight)]',
      LABEL_FONT_SIZE_CLASSES[this.size()],
      this.disabled()
        ? 'cursor-not-allowed opacity-[var(--vlm-checkbox-disabled-opacity)]'
        : 'cursor-pointer'
    )
  );

  protected onChange(event: Event): void {
    this.checked.set((event.target as HTMLInputElement).checked);
  }

  protected onBlur(): void {
    this.touch.emit();
  }
}
