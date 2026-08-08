import { Component, computed, input, model, output } from '@angular/core';
import type { FormValueControl, ValidationError } from '@angular/forms/signals';
import type { RadioSize, RadioTheme } from '../../../types/data-input/radio.types';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-radio-group',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './radio-group.html',
  styleUrl: './_radio-group.tokens.css'
})
export class RadioGroup implements FormValueControl<string> {
  readonly value = model('');
  readonly size = input<RadioSize>('md');
  readonly theme = input<RadioTheme>('primary');
  readonly name = input('');
  readonly required = input(false);
  readonly id = input<string>();
  readonly vertical = input(true);

  readonly disabled = input(false);
  readonly invalid = input(false);
  readonly touched = input(false);
  readonly errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);

  readonly touch = output<void>();

  protected readonly errorId = computed(() => `${this.id() ?? 'vlm-radio-group'}-error`);

  protected readonly showError = computed(() => this.touched() && this.errors().length > 0);
  protected readonly errorMessage = computed(() => this.errors()[0]?.message ?? '');

  protected readonly groupClasses = computed(() =>
    cx(
      'vlm-radio-group inline-flex gap-[var(--vlm-radio-group-gap)]',
      this.vertical() ? 'flex-col' : 'flex-row'
    )
  );

  selectValue(value: string): void {
    if (this.disabled()) {
      return;
    }
    this.value.set(value);
  }

  notifyTouch(): void {
    this.touch.emit();
  }
}
