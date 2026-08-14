import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import type { IconName } from '../../../utils/icons';
import type { IconSize, IconTheme } from '../../../types/data-display/icon.types';
import { ICON_MAP } from '../../../icons/icons';

type ParsedIcon = {
  viewBox: string;
  fill: string | null;
  stroke: string | null;
  strokeWidth: string | null;
  strokeLinecap: string | null;
  strokeLinejoin: string | null;
  content: SafeHtml;
} | null;

@Component({
  selector: 'vlm-icon',
  standalone: true,
  imports: [],
  template: `
    @if (parsedIcon(); as icon) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        [attr.viewBox]="icon.viewBox"
        [attr.fill]="icon.fill"
        [attr.stroke]="icon.stroke"
        [attr.stroke-width]="icon.strokeWidth"
        [attr.stroke-linecap]="icon.strokeLinecap"
        [attr.stroke-linejoin]="icon.strokeLinejoin"
        [innerHTML]="icon.content"
      ></svg>
    }
  `,
  styleUrls: ['./_icon.tokens.css', './icon.css'],
  host: {
    '[style.--vlm-icon-size]': 'iconSize()',
    '[attr.data-theme]': 'theme()',
    '[attr.role]': '"img"',
    '[attr.aria-label]': 'alt() || icon()'
  }
})
export class Icon {
  private sanitizer = inject(DomSanitizer);

  icon = input.required<IconName>();
  size = input<IconSize>('md');
  theme = input<IconTheme>('neutral');
  alt = input<string>('');

  parsedIcon = computed<ParsedIcon>(() => {
    const iconName = this.icon();
    const rawSvg = ICON_MAP[iconName];

    if (!rawSvg) {
      return null;
    }

    // Extract all SVG attributes
    const viewBoxMatch = rawSvg.match(/viewBox="([^"]*)"/);
    const fillMatch = rawSvg.match(/<svg[^>]*\sfill="([^"]*)"/);
    const strokeMatch = rawSvg.match(/<svg[^>]*\sstroke="([^"]*)"/);
    const strokeWidthMatch = rawSvg.match(/stroke-width="([^"]*)"/);
    const strokeLinecapMatch = rawSvg.match(/stroke-linecap="([^"]*)"/);
    const strokeLinejoinMatch = rawSvg.match(/stroke-linejoin="([^"]*)"/);

    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
    const fill = fillMatch ? (fillMatch[1] === 'none' ? 'none' : 'currentColor') : 'currentColor';
    const stroke = strokeMatch ? (strokeMatch[1] === 'none' ? 'none' : 'currentColor') : null;
    const strokeWidth = strokeWidthMatch ? strokeWidthMatch[1] : null;
    const strokeLinecap = strokeLinecapMatch ? strokeLinecapMatch[1] : null;
    const strokeLinejoin = strokeLinejoinMatch ? strokeLinejoinMatch[1] : null;

    // Get content between <svg...> and </svg>
    const contentMatch = rawSvg.match(/<svg[^>]*>(.*)<\/svg>/s);
    let content = contentMatch ? contentMatch[1] : '';

    // Process inner elements: replace existing colors and keep fill="none"
    content = content
      .replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"')
      .replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');

    return {
      viewBox,
      fill,
      stroke,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      content: this.sanitizer.bypassSecurityTrustHtml(content)
    };
  });

  iconSize = computed(() => {
    const size = this.size();
    if (typeof size === 'number') {
      return `${size}px`;
    }
    return `var(--vlm-icon-size-${size})`;
  });
}
