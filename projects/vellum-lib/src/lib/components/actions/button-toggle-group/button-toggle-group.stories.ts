import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate, moduleMetadata } from '@storybook/angular-vite';
import { fn } from 'storybook/test';
import { ButtonToggle } from './button-toggle/button-toggle';
import { ButtonToggleGroup } from './button-toggle-group';

const meta: Meta<ButtonToggleGroup> = {
  title: 'Actions/Button Toggle Group',
  component: ButtonToggleGroup,
  decorators: [moduleMetadata({ imports: [ButtonToggle] })],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    theme: { control: 'select', options: ['primary', 'secondary', 'info', 'success', 'warning'] },
    selectionChange: { action: 'selectionChange' }
  },
  args: {
    size: 'md',
    theme: 'primary',
    disabled: false,
    vertical: false,
    multiple: false,
    value: [],
    selectionChange: fn()
  },
  render: args => ({
    props: args,
    template: `
      <vlm-button-toggle-group ${argsToTemplate(args)}>
        <vlm-button-toggle value="bold">Bold</vlm-button-toggle>
        <vlm-button-toggle value="italic">Italic</vlm-button-toggle>
        <vlm-button-toggle value="underline">Underline</vlm-button-toggle>
      </vlm-button-toggle-group>
    `
  })
};

export default meta;
type Story = StoryObj<ButtonToggleGroup>;

export const Default: Story = {};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <vlm-button-toggle-group ${argsToTemplate(args, { exclude: ['theme'] })} theme="primary">
          <vlm-button-toggle value="bold">Bold</vlm-button-toggle>
          <vlm-button-toggle value="italic">Italic</vlm-button-toggle>
        </vlm-button-toggle-group>
        <vlm-button-toggle-group ${argsToTemplate(args, { exclude: ['theme'] })} theme="secondary">
          <vlm-button-toggle value="bold">Bold</vlm-button-toggle>
          <vlm-button-toggle value="italic">Italic</vlm-button-toggle>
        </vlm-button-toggle-group>
        <vlm-button-toggle-group ${argsToTemplate(args, { exclude: ['theme'] })} theme="info">
          <vlm-button-toggle value="bold">Bold</vlm-button-toggle>
          <vlm-button-toggle value="italic">Italic</vlm-button-toggle>
        </vlm-button-toggle-group>
        <vlm-button-toggle-group ${argsToTemplate(args, { exclude: ['theme'] })} theme="success">
          <vlm-button-toggle value="bold">Bold</vlm-button-toggle>
          <vlm-button-toggle value="italic">Italic</vlm-button-toggle>
        </vlm-button-toggle-group>
        <vlm-button-toggle-group ${argsToTemplate(args, { exclude: ['theme'] })} theme="warning">
          <vlm-button-toggle value="bold">Bold</vlm-button-toggle>
          <vlm-button-toggle value="italic">Italic</vlm-button-toggle>
        </vlm-button-toggle-group>
      </div>
    `
  })
};

export const Multiple: Story = {
  args: {
    multiple: true,
    value: ['bold']
  }
};

export const Vertical: Story = {
  args: {
    vertical: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: ['bold']
  }
};
