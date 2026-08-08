import { Component, computed, input } from '@angular/core';
import type { MenuSize, MenuTheme } from '../../../types/navigation/menu.types';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-menu',
  imports: [],
  host: { class: 'block' },
  templateUrl: './menu.html',
  styleUrl: './_menu.tokens.css'
})
export class Menu {
  readonly size = input<MenuSize>('md');
  readonly theme = input<MenuTheme>('primary');
  readonly id = input<string>();
  readonly vertical = input(true);
  readonly disabled = input(false);

  protected readonly menuClasses = computed(() =>
    cx(
      'vlm-menu m-0 flex list-none p-0 gap-[var(--vlm-menu-gap)]',
      this.vertical() ? 'flex-col' : 'flex-row'
    )
  );
}
