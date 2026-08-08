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
        <span swapOff>☀️</span>
        <span swapOn>🌙</span>
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
          <span swapOff>☀️</span>
          <span swapOn>🌙</span>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="sm">
          <span swapOff>☀️</span>
          <span swapOn>🌙</span>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="md">
          <span swapOff>☀️</span>
          <span swapOn>🌙</span>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="lg">
          <span swapOff>☀️</span>
          <span swapOn>🌙</span>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="xl">
          <span swapOff>☀️</span>
          <span swapOn>🌙</span>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="xxl">
          <span swapOff>☀️</span>
          <span swapOn>🌙</span>
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
