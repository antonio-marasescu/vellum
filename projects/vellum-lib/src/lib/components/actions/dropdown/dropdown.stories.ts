import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { fn } from 'storybook/test';
import { Dropdown } from './dropdown';

const meta: Meta<Dropdown> = {
  title: 'Actions/Dropdown',
  component: Dropdown,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning']
    },
    variant: {
      control: 'select',
      options: ['basic', 'text', 'outlined', 'fab', 'fab-outlined']
    },
    clicked: { action: 'clicked' },
    selected: { action: 'selected' }
  },
  args: {
    label: 'Options',
    size: 'md',
    theme: 'primary',
    variant: 'basic',
    disabled: false,
    useIcon: false,
    items: [
      { key: 'edit', value: 'Edit' },
      { key: 'duplicate', value: 'Duplicate' },
      { key: 'delete', value: 'Delete' }
    ],
    clicked: fn(),
    selected: fn()
  },
  render: args => ({
    props: args,
    template: `<vlm-dropdown ${argsToTemplate(args)}></vlm-dropdown>`
  })
};

export default meta;
type Story = StoryObj<Dropdown>;

export const Default: Story = {};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-dropdown ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="primary" label="Primary"></vlm-dropdown>
        <vlm-dropdown ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="secondary" label="Secondary"></vlm-dropdown>
        <vlm-dropdown ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="info" label="Info"></vlm-dropdown>
        <vlm-dropdown ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="success" label="Success"></vlm-dropdown>
        <vlm-dropdown ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="warning" label="Warning"></vlm-dropdown>
      </div>
    `
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
