import { Component, computed, input } from '@angular/core';
import type { DividerTheme } from '../../../types/layout/divider.types';
import { THEME_CLASSES } from '../../../theming/layout/divider.theming';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-divider',
  imports: [],
  host: { '[class]': 'hostClasses()' },
  templateUrl: './divider.html',
  styleUrl: './_divider.tokens.css'
})
export class Divider {
  readonly vertical = input(false);
  readonly inset = input(false);
  readonly width = input(1);
  readonly theme = input<DividerTheme>('neutral');

  protected readonly hostClasses = computed(() =>
    this.vertical() ? 'inline-block self-stretch' : 'block w-full'
  );

  protected readonly lineClasses = computed(() => {
    const vertical = this.vertical();
    const inset = this.inset();

    return cx(
      'vlm-divider',
      THEME_CLASSES[this.theme()],
      vertical
        ? 'block h-full border-s-[length:var(--vlm-divider-width)]'
        : 'block w-full border-t-[length:var(--vlm-divider-width)]',
      inset
        ? vertical
          ? 'mt-[length:var(--vlm-divider-inset-size)]'
          : 'ms-[length:var(--vlm-divider-inset-size)]'
        : ''
    );
  });
}
