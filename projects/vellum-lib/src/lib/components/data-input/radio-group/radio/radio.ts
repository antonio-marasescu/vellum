import { Component, computed, inject, input } from '@angular/core';
import { RadioGroup } from '../radio-group';
import {
  BASE_CLASSES,
  CHECKED_CLASSES,
  DISABLED_CLASSES,
  DOT_BASE_CLASSES,
  DOT_CLASSES,
  DOT_SIZE_CLASSES,
  ENABLED_CLASSES,
  INVALID_CLASSES,
  INVALID_DOT_CLASSES,
  LABEL_FONT_SIZE_CLASSES,
  SIZE_CLASSES,
  UNCHECKED_CLASSES
} from '../../../../theming/data-input/radio.theming';
import { cx } from '../../../../utils/class-names';

@Component({
  selector: 'vlm-radio',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './radio.html',
  styleUrl: './_radio.tokens.css'
})
export class Radio {
  protected readonly group = inject(RadioGroup);

  readonly value = input.required<string>();
  readonly label = input<string>();
  readonly disabled = input(false);
  readonly id = input<string>();

  protected readonly checked = computed(() => this.group.value() === this.value());
  protected readonly isDisabled = computed(() => this.group.disabled() || this.disabled());

  protected readonly circleClasses = computed(() => {
    const stateClasses = this.group.invalid()
      ? INVALID_CLASSES
      : this.checked()
        ? CHECKED_CLASSES[this.group.theme()]
        : UNCHECKED_CLASSES;

    return cx(
      BASE_CLASSES,
      SIZE_CLASSES[this.group.size()],
      stateClasses,
      this.isDisabled() ? DISABLED_CLASSES : ENABLED_CLASSES
    );
  });

  protected readonly dotClasses = computed(() => {
    const stateClasses = this.group.invalid()
      ? INVALID_DOT_CLASSES
      : DOT_CLASSES[this.group.theme()];

    return cx(DOT_BASE_CLASSES, DOT_SIZE_CLASSES[this.group.size()], stateClasses);
  });

  protected readonly labelClasses = computed(() =>
    cx(
      'vlm-radio__label text-[color:var(--vlm-radio-label-color)] font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-radio-font-weight)]',
      LABEL_FONT_SIZE_CLASSES[this.group.size()],
      this.isDisabled()
        ? 'cursor-not-allowed opacity-[var(--vlm-radio-disabled-opacity)]'
        : 'cursor-pointer'
    )
  );

  protected onChange(): void {
    if (this.isDisabled()) {
      return;
    }
    this.group.selectValue(this.value());
  }

  protected onBlur(): void {
    this.group.notifyTouch();
  }
}
