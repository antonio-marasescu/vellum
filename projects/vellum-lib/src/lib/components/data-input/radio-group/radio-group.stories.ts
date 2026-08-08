import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate, moduleMetadata } from '@storybook/angular-vite';
import { fn } from 'storybook/test';
import { Radio } from './radio/radio';
import { RadioGroup } from './radio-group';

const meta: Meta<RadioGroup> = {
  title: 'Data Input/Radio Group',
  component: RadioGroup,
  decorators: [moduleMetadata({ imports: [Radio] })],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    theme: { control: 'select', options: ['primary', 'secondary'] },
    valueChange: { action: 'valueChange' }
  },
  args: {
    size: 'md',
    theme: 'primary',
    disabled: false,
    vertical: true,
    value: '',
    valueChange: fn()
  },
  render: args => ({
    props: args,
    template: `
      <vlm-radio-group ${argsToTemplate(args)}>
        <vlm-radio value="bold" label="Bold"></vlm-radio>
        <vlm-radio value="italic" label="Italic"></vlm-radio>
        <vlm-radio value="underline" label="Underline"></vlm-radio>
      </vlm-radio-group>
    `
  })
};

export default meta;
type Story = StoryObj<RadioGroup>;

export const Default: Story = {};

export const Themes: Story = {
  args: {
    value: 'bold'
  },
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <vlm-radio-group ${argsToTemplate(args, { exclude: ['theme'] })} theme="primary">
          <vlm-radio value="bold" label="Bold"></vlm-radio>
          <vlm-radio value="italic" label="Italic"></vlm-radio>
        </vlm-radio-group>
        <vlm-radio-group ${argsToTemplate(args, { exclude: ['theme'] })} theme="secondary">
          <vlm-radio value="bold" label="Bold"></vlm-radio>
          <vlm-radio value="italic" label="Italic"></vlm-radio>
        </vlm-radio-group>
      </div>
    `
  })
};

export const Horizontal: Story = {
  args: {
    vertical: false
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'bold'
  }
};

export const Invalid: Story = {
  args: {
    invalid: true,
    touched: true,
    errors: [{ kind: 'required', message: 'Please select an option.' }]
  }
};
