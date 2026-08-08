import { Component, computed, input, model, output } from '@angular/core';
import type { FormValueControl, ValidationError } from '@angular/forms/signals';
import type {
  SelectSize,
  SelectTheme,
  SelectVariant
} from '../../../types/data-input/select.types';
import {
  BASE_CLASSES,
  INVALID_CLASSES,
  SIZE_CLASSES,
  VARIANT_THEME_CLASSES
} from '../../../theming/data-input/select.theming';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-select',
  imports: [],
  host: { class: 'block' },
  templateUrl: './select.html',
  styleUrl: './_select.tokens.css'
})
export class Select implements FormValueControl<string> {
  readonly value = model('');
  readonly label = input<string>();
  readonly size = input<SelectSize>('md');
  readonly theme = input<SelectTheme>('primary');
  readonly variant = input<SelectVariant>('basic');
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

  protected readonly selectClasses = computed(() => {
    const variant = this.variant();
    const stateClasses = this.invalid()
      ? INVALID_CLASSES[variant]
      : VARIANT_THEME_CLASSES[variant][this.theme()];

    return cx(BASE_CLASSES, SIZE_CLASSES[this.size()], stateClasses);
  });

  protected onChange(event: Event): void {
    this.value.set((event.target as HTMLSelectElement).value);
  }

  protected onBlur(): void {
    this.touch.emit();
  }
}
