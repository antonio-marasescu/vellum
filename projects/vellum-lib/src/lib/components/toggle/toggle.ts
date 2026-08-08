import { Component, computed, input, model, output } from '@angular/core';
import type { FormCheckboxControl, ValidationError } from '@angular/forms/signals';
import type { ToggleSize, ToggleTheme } from '../../types/toggle.types';
import {
  CHECKED_THUMB_CLASSES,
  CHECKED_TRACK_CLASSES,
  DISABLED_CLASSES,
  ENABLED_CLASSES,
  INVALID_THUMB_CLASSES,
  INVALID_TRACK_CLASSES,
  LABEL_FONT_SIZE_CLASSES,
  THUMB_BASE_CLASSES,
  THUMB_SIZE_CLASSES,
  THUMB_TRAVEL_CLASSES,
  TRACK_BASE_CLASSES,
  TRACK_SIZE_CLASSES,
  UNCHECKED_THUMB_CLASSES,
  UNCHECKED_TRACK_CLASSES
} from '../../theming/toggle.theming';
import { cx } from '../../utils/class-names';

@Component({
  selector: 'vlm-toggle',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './toggle.html',
  styleUrl: './_toggle.tokens.css'
})
export class Toggle implements FormCheckboxControl {
  readonly checked = model(false);
  readonly label = input<string>();
  readonly size = input<ToggleSize>('md');
  readonly theme = input<ToggleTheme>('primary');
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

  protected readonly trackClasses = computed(() => {
    const stateClasses = this.invalid()
      ? INVALID_TRACK_CLASSES
      : this.checked()
        ? CHECKED_TRACK_CLASSES[this.theme()]
        : UNCHECKED_TRACK_CLASSES;

    return cx(
      TRACK_BASE_CLASSES,
      TRACK_SIZE_CLASSES[this.size()],
      stateClasses,
      this.disabled() ? DISABLED_CLASSES : ENABLED_CLASSES
    );
  });

  protected readonly thumbClasses = computed(() => {
    const stateClasses = this.invalid()
      ? INVALID_THUMB_CLASSES
      : this.checked()
        ? CHECKED_THUMB_CLASSES[this.theme()]
        : UNCHECKED_THUMB_CLASSES;

    return cx(
      THUMB_BASE_CLASSES,
      THUMB_SIZE_CLASSES[this.size()],
      this.checked() ? THUMB_TRAVEL_CLASSES[this.size()] : '',
      stateClasses
    );
  });

  protected readonly labelClasses = computed(() =>
    cx(
      'vlm-toggle__label text-[color:var(--vlm-toggle-label-color)] font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-toggle-font-weight)]',
      LABEL_FONT_SIZE_CLASSES[this.size()],
      this.disabled()
        ? 'cursor-not-allowed opacity-[var(--vlm-toggle-disabled-opacity)]'
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
