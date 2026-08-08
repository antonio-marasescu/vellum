import { Component, computed, inject, input } from '@angular/core';
import { ButtonToggleGroup } from '../button-toggle-group';
import {
  BASE_CLASSES,
  SIZE_CLASSES,
  THEME_SELECTED_CLASSES,
  UNSELECTED_CLASSES
} from '../../../theming/button-toggle.theming';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-button-toggle',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './button-toggle.html',
  styleUrl: './_button-toggle.tokens.css'
})
export class ButtonToggle {
  private readonly group = inject(ButtonToggleGroup);

  readonly value = input.required<string>();
  readonly disabled = input(false);

  protected readonly selected = computed(() => this.group.selected().includes(this.value()));
  protected readonly isDisabled = computed(() => this.group.disabled() || this.disabled());

  protected readonly toggleClasses = computed(() => {
    const stateClasses = this.selected()
      ? THEME_SELECTED_CLASSES[this.group.theme()]
      : UNSELECTED_CLASSES;

    return cx(BASE_CLASSES, SIZE_CLASSES[this.group.size()], stateClasses);
  });

  protected onClick(): void {
    if (this.isDisabled()) {
      return;
    }
    this.group.toggleValue(this.value());
  }
}
