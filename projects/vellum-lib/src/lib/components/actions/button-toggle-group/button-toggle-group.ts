import { Component, computed, input, linkedSignal, output } from '@angular/core';
import type {
  ButtonToggleSize,
  ButtonToggleTheme
} from '../../../types/actions/button-toggle.types';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-button-toggle-group',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './button-toggle-group.html',
  styleUrl: './_button-toggle-group.tokens.css'
})
export class ButtonToggleGroup {
  readonly size = input<ButtonToggleSize>('md');
  readonly theme = input<ButtonToggleTheme>('primary');
  readonly id = input<string>();
  readonly name = input<string>();
  readonly disabled = input(false);
  readonly vertical = input(false);
  readonly multiple = input(false);
  readonly value = input<readonly string[]>([]);

  readonly selectionChange = output<readonly string[]>();

  // Read by `ButtonToggle` (via DI) to derive its own selected/highlight state.
  readonly selected = linkedSignal(() => this.value());

  protected readonly groupClasses = computed(() =>
    cx(
      'vlm-button-toggle-group inline-flex gap-[var(--vlm-button-toggle-group-gap)]',
      this.vertical() ? 'flex-col' : 'flex-row'
    )
  );

  toggleValue(value: string): void {
    if (this.disabled()) {
      return;
    }

    const current = this.selected();
    const isSelected = current.includes(value);

    const next = this.multiple()
      ? isSelected
        ? current.filter(entry => entry !== value)
        : [...current, value]
      : isSelected
        ? []
        : [value];

    this.selected.set(next);
    this.selectionChange.emit(next);
  }
}
