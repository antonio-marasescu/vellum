import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate, moduleMetadata } from '@storybook/angular-vite';
import { fn } from 'storybook/test';
import { SwapButton } from './swap-button';
import { Icon } from '../../data-display/icon/icon';

const meta: Meta<SwapButton> = {
  title: 'Actions/Swap Button',
  component: SwapButton,
  decorators: [
    moduleMetadata({
      imports: [Icon]
    })
  ],
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
        <vlm-icon swapOff icon="sun" size="lg"></vlm-icon>
        <vlm-icon swapOn icon="moon" size="lg"></vlm-icon>
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
          <vlm-icon swapOff icon="sun" size="xs"></vlm-icon>
          <vlm-icon swapOn icon="moon" size="xs"></vlm-icon>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="sm">
          <vlm-icon swapOff icon="sun" size="sm"></vlm-icon>
          <vlm-icon swapOn icon="moon" size="sm"></vlm-icon>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="md">
          <vlm-icon swapOff icon="sun" size="md"></vlm-icon>
          <vlm-icon swapOn icon="moon" size="md"></vlm-icon>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="lg">
          <vlm-icon swapOff icon="sun" size="lg"></vlm-icon>
          <vlm-icon swapOn icon="moon" size="lg"></vlm-icon>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="xl">
          <vlm-icon swapOff icon="sun" size="xl"></vlm-icon>
          <vlm-icon swapOn icon="moon" size="xl"></vlm-icon>
        </vlm-swap-button>
        <vlm-swap-button ${argsToTemplate(args, { exclude: ['size'] })} size="xxl">
          <vlm-icon swapOff icon="sun" size="xxl"></vlm-icon>
          <vlm-icon swapOn icon="moon" size="xxl"></vlm-icon>
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
