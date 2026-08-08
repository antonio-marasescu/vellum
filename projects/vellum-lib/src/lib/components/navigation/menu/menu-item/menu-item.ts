import { Component, computed, contentChild, inject, input, model, output } from '@angular/core';
import { Menu } from '../menu';
import {
  ACTIVE_THEME_CLASSES,
  CHEVRON_BASE_CLASSES,
  CHEVRON_SIZE_CLASSES,
  INACTIVE_CLASSES,
  ROW_BASE_CLASSES,
  SIZE_CLASSES,
  SUBMENU_FLOATING_CLASSES,
  SUBMENU_INDENT_CLASSES,
  SUBMENU_WRAPPER_BASE_CLASSES
} from '../../../../theming/navigation/menu.theming';
import { cx } from '../../../../utils/class-names';

@Component({
  selector: 'vlm-menu-item',
  imports: [],
  host: { class: 'block' },
  templateUrl: './menu-item.html',
  styleUrl: './_menu-item.tokens.css'
})
export class MenuItem {
  protected readonly group = inject(Menu);

  readonly active = input(false);
  readonly disabled = input(false);
  readonly id = input<string>();
  readonly expanded = model(false);

  readonly clicked = output<void>();

  protected readonly hasSubmenu = contentChild(Menu, { descendants: false });

  protected readonly isDisabled = computed(() => this.group.disabled() || this.disabled());

  protected readonly rowClasses = computed(() => {
    const stateClasses = this.active()
      ? ACTIVE_THEME_CLASSES[this.group.theme()]
      : INACTIVE_CLASSES;

    return cx(ROW_BASE_CLASSES, SIZE_CLASSES[this.group.size()], stateClasses);
  });

  protected readonly chevronClasses = computed(() =>
    cx(CHEVRON_BASE_CLASSES, CHEVRON_SIZE_CLASSES[this.group.size()])
  );

  protected readonly submenuFloating = computed(() => !this.group.vertical());

  protected readonly submenuWrapperClasses = computed(() =>
    this.submenuFloating()
      ? SUBMENU_FLOATING_CLASSES
      : cx(SUBMENU_WRAPPER_BASE_CLASSES, SUBMENU_INDENT_CLASSES)
  );

  protected onRowClick(): void {
    if (this.isDisabled()) {
      return;
    }
    if (this.hasSubmenu()) {
      this.expanded.set(!this.expanded());
      return;
    }
    this.clicked.emit();
  }
}
