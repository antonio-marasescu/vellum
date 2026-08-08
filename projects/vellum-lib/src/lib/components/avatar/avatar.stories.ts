import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { fn } from 'storybook/test';
import { Avatar } from './avatar';

const meta: Meta<Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    variant: { control: 'select', options: ['round', 'square', 'rounded'] },
    clicked: { action: 'clicked' }
  },
  args: {
    url: 'https://i.pravatar.cc/150?img=12',
    useUrl: true,
    placeholder: 'AB',
    size: 'md',
    variant: 'round',
    clickable: false,
    clicked: fn()
  },
  render: args => ({
    props: args,
    template: `<vlm-avatar ${argsToTemplate(args)}></vlm-avatar>`
  })
};

export default meta;
type Story = StoryObj<Avatar>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    useUrl: false
  }
};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-avatar ${argsToTemplate(args, { exclude: ['size'] })} size="xs"></vlm-avatar>
        <vlm-avatar ${argsToTemplate(args, { exclude: ['size'] })} size="sm"></vlm-avatar>
        <vlm-avatar ${argsToTemplate(args, { exclude: ['size'] })} size="md"></vlm-avatar>
        <vlm-avatar ${argsToTemplate(args, { exclude: ['size'] })} size="lg"></vlm-avatar>
        <vlm-avatar ${argsToTemplate(args, { exclude: ['size'] })} size="xl"></vlm-avatar>
        <vlm-avatar ${argsToTemplate(args, { exclude: ['size'] })} size="xxl"></vlm-avatar>
      </div>
    `
  })
};

export const Variants: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-avatar ${argsToTemplate(args, { exclude: ['variant'] })} variant="round"></vlm-avatar>
        <vlm-avatar ${argsToTemplate(args, { exclude: ['variant'] })} variant="rounded"></vlm-avatar>
        <vlm-avatar ${argsToTemplate(args, { exclude: ['variant'] })} variant="square"></vlm-avatar>
      </div>
    `
  })
};

export const Clickable: Story = {
  args: {
    clickable: true
  }
};
