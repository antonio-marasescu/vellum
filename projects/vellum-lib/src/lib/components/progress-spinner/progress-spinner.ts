import { Component, computed, input } from '@angular/core';
import type { ProgressSpinnerMode, ProgressSpinnerTheme } from '../../types/progress-spinner.types';
import { THEME_COLOR_VARS, THEME_STROKE_CLASSES } from '../../theming/progress-spinner.theming';
import { cx } from '../../utils/class-names';

@Component({
  selector: 'vlm-progress-spinner',
  imports: [],
  host: { class: 'inline-block' },
  templateUrl: './progress-spinner.html',
  styleUrls: ['./_progress-spinner.tokens.css', './progress-spinner.css']
})
export class ProgressSpinner {
  readonly mode = input<ProgressSpinnerMode>('indeterminate');
  readonly theme = input<ProgressSpinnerTheme>('primary');
  readonly value = input(0);
  readonly diameter = input(40);
  readonly strokeWidth = input(4);

  protected readonly isIndeterminate = computed(() => this.mode() === 'indeterminate');
  protected readonly center = computed(() => this.diameter() / 2);
  protected readonly radius = computed(() => (this.diameter() - this.strokeWidth()) / 2);
  protected readonly viewBox = computed(() => `0 0 ${this.diameter()} ${this.diameter()}`);
  protected readonly innerInset = computed(() => this.strokeWidth() + 2);
  protected readonly innerColorVar = computed(() => `var(${THEME_COLOR_VARS[this.theme()]})`);

  // The progress arc sits inset from the track, echoing the indeterminate loader's smaller,
  // faster inner ring nested inside its outer one.
  protected readonly innerRadius = computed(() => this.radius() - this.innerInset());
  protected readonly innerCircumference = computed(() => 2 * Math.PI * this.innerRadius());

  protected readonly dashOffset = computed(() => {
    const clampedProgress = Math.min(100, Math.max(0, this.value()));
    return this.innerCircumference() * (1 - clampedProgress / 100);
  });

  protected readonly arcClasses = computed(() =>
    cx(
      'vlm-progress-spinner__arc transition-[stroke-dashoffset] duration-[var(--vlm-progress-spinner-transition-duration)] ease-[ease]',
      THEME_STROKE_CLASSES[this.theme()]
    )
  );
}
