import { Component, computed, input, output } from '@angular/core';
import type { AvatarSize, AvatarVariant } from '../../../types/data-display/avatar.types';
import {
  BASE_CLASSES,
  CLICKABLE_CLASSES,
  SIZE_CLASSES,
  VARIANT_CLASSES
} from '../../../theming/data-display/avatar.theming';
import { cx } from '../../../utils/class-names';

@Component({
  selector: 'vlm-avatar',
  imports: [],
  host: { class: 'inline-flex' },
  templateUrl: './avatar.html',
  styleUrl: './_avatar.tokens.css'
})
export class Avatar {
  readonly url = input<string>();
  readonly useUrl = input(true);
  readonly placeholder = input<string>();
  readonly size = input<AvatarSize>('md');
  readonly variant = input<AvatarVariant>('round');
  readonly clickable = input(false);

  readonly clicked = output<void>();

  protected readonly showImage = computed(() => this.useUrl() && !!this.url());

  protected readonly avatarClasses = computed(() =>
    cx(
      BASE_CLASSES,
      SIZE_CLASSES[this.size()],
      VARIANT_CLASSES[this.variant()],
      this.clickable() ? CLICKABLE_CLASSES : ''
    )
  );

  protected onClick(): void {
    if (!this.clickable()) {
      return;
    }
    this.clicked.emit();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (!this.clickable() || (event.key !== 'Enter' && event.key !== ' ')) {
      return;
    }
    event.preventDefault();
    this.onClick();
  }
}
