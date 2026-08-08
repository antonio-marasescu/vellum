import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { fn } from 'storybook/test';
import { Chip } from './chip';

const meta: Meta<Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning']
    },
    clicked: { action: 'clicked' },
    removed: { action: 'removed' }
  },
  args: {
    size: 'md',
    theme: 'primary',
    clickable: true,
    removable: false,
    highlighted: false,
    disabled: false,
    clicked: fn(),
    removed: fn()
  },
  render: args => ({
    props: args,
    template: `<vlm-chip ${argsToTemplate(args)}>Chip</vlm-chip>`
  })
};

export default meta;
type Story = StoryObj<Chip>;

export const Default: Story = {};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-chip ${argsToTemplate(args, { exclude: ['theme'] })} theme="primary">Primary</vlm-chip>
        <vlm-chip ${argsToTemplate(args, { exclude: ['theme'] })} theme="secondary">Secondary</vlm-chip>
        <vlm-chip ${argsToTemplate(args, { exclude: ['theme'] })} theme="info">Info</vlm-chip>
        <vlm-chip ${argsToTemplate(args, { exclude: ['theme'] })} theme="success">Success</vlm-chip>
        <vlm-chip ${argsToTemplate(args, { exclude: ['theme'] })} theme="warning">Warning</vlm-chip>
      </div>
    `
  })
};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-chip ${argsToTemplate(args, { exclude: ['size'] })} size="xs">xs</vlm-chip>
        <vlm-chip ${argsToTemplate(args, { exclude: ['size'] })} size="sm">sm</vlm-chip>
        <vlm-chip ${argsToTemplate(args, { exclude: ['size'] })} size="md">md</vlm-chip>
        <vlm-chip ${argsToTemplate(args, { exclude: ['size'] })} size="lg">lg</vlm-chip>
        <vlm-chip ${argsToTemplate(args, { exclude: ['size'] })} size="xl">xl</vlm-chip>
        <vlm-chip ${argsToTemplate(args, { exclude: ['size'] })} size="xxl">xxl</vlm-chip>
      </div>
    `
  })
};

export const Removable: Story = {
  args: {
    removable: true
  }
};

export const Highlighted: Story = {
  args: {
    highlighted: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    removable: true
  }
};

export const NotClickable: Story = {
  args: {
    clickable: false,
    removable: true
  }
};
