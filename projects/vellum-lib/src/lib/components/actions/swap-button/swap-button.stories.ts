import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { fn } from 'storybook/test';
import { SwapButton } from './swap-button';

const meta: Meta<SwapButton> = {
  title: 'Actions/Swap Button',
  component: SwapButton,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    clicked: { action: 'clicked' }
  },
  args: {
    size: 'md',
    disabled: false,
    swapped: false,
    clicked: fn()
  },
  render: args => ({
    props: args,
    template: `
      <vlm-swap-button ${argsToTemplate(args)}>
        <img swapOff src="/icons/sun.svg" alt="" width="24" height="24" />
        <img swapOn src="/icons/moon.svg" alt="" width="24" height="24" />
      </vlm-swap-button>
    `
  })
};

export default meta;
type Story = StoryObj<SwapButton>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="xs">
          <img swapOff src="/icons/sun.svg" alt="" width="16" height="16" />
          <img swapOn src="/icons/moon.svg" alt="" width="16" height="16" />
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="sm">
          <img swapOff src="/icons/sun.svg" alt="" width="18" height="18" />
          <img swapOn src="/icons/moon.svg" alt="" width="18" height="18" />
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="md">
          <img swapOff src="/icons/sun.svg" alt="" width="20" height="20" />
          <img swapOn src="/icons/moon.svg" alt="" width="20" height="20" />
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="lg">
          <img swapOff src="/icons/sun.svg" alt="" width="24" height="24" />
          <img swapOn src="/icons/moon.svg" alt="" width="24" height="24" />
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="xl">
          <img swapOff src="/icons/sun.svg" alt="" width="28" height="28" />
          <img swapOn src="/icons/moon.svg" alt="" width="28" height="28" />
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="xxl">
          <img swapOff src="/icons/sun.svg" alt="" width="32" height="32" />
          <img swapOn src="/icons/moon.svg" alt="" width="32" height="32" />
        </vlm-swap-button>
      </div>
    `
  })
};

export const Swapped: Story = {
  args: {
    swapped: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
