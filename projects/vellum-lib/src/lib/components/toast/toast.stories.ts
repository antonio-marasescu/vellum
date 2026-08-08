import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { fn } from 'storybook/test';
import { Toast } from './toast';

const meta: Meta<Toast> = {
  title: 'Toast',
  component: Toast,
  argTypes: {
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning']
    },
    variant: { control: 'select', options: ['basic', 'outlined'] },
    removed: { action: 'removed' }
  },
  args: {
    theme: 'primary',
    variant: 'basic',
    removable: false,
    disabled: false,
    removed: fn()
  },
  render: args => ({
    props: args,
    template: `<vlm-toast ${argsToTemplate(args)}>Saved successfully</vlm-toast>`
  })
};

export default meta;
type Story = StoryObj<Toast>;

export const Default: Story = {};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
        <vlm-toast ${argsToTemplate(args, { exclude: ['theme'] })} theme="primary">Primary</vlm-toast>
        <vlm-toast ${argsToTemplate(args, { exclude: ['theme'] })} theme="secondary">Secondary</vlm-toast>
        <vlm-toast ${argsToTemplate(args, { exclude: ['theme'] })} theme="info">Info</vlm-toast>
        <vlm-toast ${argsToTemplate(args, { exclude: ['theme'] })} theme="success">Success</vlm-toast>
        <vlm-toast ${argsToTemplate(args, { exclude: ['theme'] })} theme="warning">Warning</vlm-toast>
      </div>
    `
  })
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  }
};

export const Removable: Story = {
  args: {
    removable: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    removable: true
  }
};
