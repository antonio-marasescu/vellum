import { Component, computed, input, model } from '@angular/core';
import type { PanelSize, PanelTheme } from '../../../types/data-display/panel.types';
import {
  BASE_CLASSES,
  BODY_SIZE_CLASSES,
  DISABLED_CLASSES,
  HEADER_BASE_CLASSES,
  HEADER_SIZE_CLASSES,
  THEME_CLASSES
} from '../../../theming/data-display/panel.theming';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-panel',
  imports: [],
  host: { class: 'block' },
  templateUrl: './panel.html',
  styleUrl: './_panel.tokens.css'
})
export class Panel {
  readonly size = input<PanelSize>('md');
  readonly theme = input<PanelTheme>('primary');
  readonly disabled = input(false);
  readonly id = input<string>();

  readonly expanded = model(false);

  protected readonly contentId = computed(() => (this.id() ? `${this.id()}-content` : null));

  protected readonly panelClasses = computed(() =>
    cx(BASE_CLASSES, THEME_CLASSES[this.theme()], this.disabled() ? DISABLED_CLASSES : '')
  );

  protected readonly headerClasses = computed(() =>
    cx(HEADER_BASE_CLASSES, HEADER_SIZE_CLASSES[this.size()])
  );

  protected readonly bodyClasses = computed(() => BODY_SIZE_CLASSES[this.size()]);

  protected onToggle(): void {
    if (this.disabled()) {
      return;
    }
    this.expanded.set(!this.expanded());
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }
    event.preventDefault();
    this.onToggle();
  }
}
