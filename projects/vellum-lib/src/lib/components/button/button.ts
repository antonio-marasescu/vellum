import { Component, input, output } from '@angular/core';
import type { ButtonSize, ButtonTheme, ButtonVariant } from '../../types/button.types';

@Component({
  selector: 'vlm-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  readonly label = input<string>();
  readonly size = input<ButtonSize>('md');
  readonly disabled = input(false);
  readonly theme = input<ButtonTheme>('primary');
  readonly variant = input<ButtonVariant>('basic');
  readonly useIcon = input(false);
  readonly id = input<string>();

  readonly clicked = output<void>();

  protected onClick(): void {
    if (this.disabled()) {
      return;
    }
    this.clicked.emit();
  }
}
