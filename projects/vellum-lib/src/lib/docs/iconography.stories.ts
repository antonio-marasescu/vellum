import type { Meta, StoryObj } from '@storybook/angular-vite';
import { moduleMetadata } from '@storybook/angular-vite';
import { Icon } from '../components/data-display/icon/icon';
import { ICON_LIST } from '../utils/icons';

const meta: Meta = {
  title: 'Iconography',
  decorators: [
    moduleMetadata({
      imports: [Icon]
    })
  ],
  parameters: {
    layout: 'padded'
  }
};

export default meta;
type Story = StoryObj;

export const AllIcons: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px; margin: 24px 0; padding: 16px; background: var(--vlm-color-bg-surface); border-radius: 8px;">
        ${ICON_LIST.map(
          icon => `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px; background: var(--vlm-color-bg); border: 1px solid var(--vlm-color-border); border-radius: 6px;">
            <vlm-icon icon="${icon}" size="lg"></vlm-icon>
            <span style="font-size: 11px; color: var(--vlm-color-text-muted); text-align: center; word-break: break-word;">${icon}</span>
          </div>
        `
        ).join('')}
      </div>
    `
  })
};
