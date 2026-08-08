import { Component, computed, input, model, output } from '@angular/core';
import type { FormValueControl, ValidationError } from '@angular/forms/signals';
import type {
  InputSize,
  InputTheme,
  InputType,
  InputVariant
} from '../../../types/data-input/input.types';
import {
  BASE_CLASSES,
  INVALID_CLASSES,
  SIZE_CLASSES,
  VARIANT_THEME_CLASSES
} from '../../../theming/data-input/input.theming';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-input',
  imports: [],
  host: { class: 'block' },
  templateUrl: './input.html',
  styleUrl: './_input.tokens.css'
})
export class Input implements FormValueControl<string> {
  readonly value = model('');
  readonly label = input<string>();
  readonly size = input<InputSize>('md');
  readonly theme = input<InputTheme>('primary');
  readonly variant = input<InputVariant>('basic');
  readonly inputType = input<InputType>('text');
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

  protected readonly inputClasses = computed(() => {
    const variant = this.variant();
    const stateClasses = this.invalid()
      ? INVALID_CLASSES[variant]
      : VARIANT_THEME_CLASSES[variant][this.theme()];

    return cx(BASE_CLASSES, SIZE_CLASSES[this.size()], stateClasses);
  });

  protected onInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value);
  }

  protected onBlur(): void {
    this.touch.emit();
  }
}
