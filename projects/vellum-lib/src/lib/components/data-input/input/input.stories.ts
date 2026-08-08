import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { Input } from './input';

const meta: Meta<Input> = {
  title: 'Data Input/Input',
  component: Input,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    theme: { control: 'select', options: ['primary', 'secondary'] },
    variant: { control: 'select', options: ['basic', 'outlined'] },
    inputType: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date']
    }
  },
  args: {
    id: 'email',
    label: 'Email',
    size: 'md',
    theme: 'primary',
    variant: 'basic',
    inputType: 'text',
    required: false,
    disabled: false,
    invalid: false,
    touched: false,
    errors: []
  },
  render: args => ({
    props: args,
    template: `<vlm-input ${argsToTemplate(args)}></vlm-input>`
  })
};

export default meta;
type Story = StoryObj<Input>;

export const Default: Story = {};

export const Variants: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 280px;">
        <vlm-input ${argsToTemplate(args, { exclude: ['variant', 'id'] })} id="variant-basic" variant="basic"></vlm-input>
        <vlm-input ${argsToTemplate(args, { exclude: ['variant', 'id'] })} id="variant-outlined" variant="outlined"></vlm-input>
      </div>
    `
  })
};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 280px;">
        <vlm-input ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-xs" size="xs" label="xs"></vlm-input>
        <vlm-input ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-sm" size="sm" label="sm"></vlm-input>
        <vlm-input ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-md" size="md" label="md"></vlm-input>
        <vlm-input ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-lg" size="lg" label="lg"></vlm-input>
        <vlm-input ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-xl" size="xl" label="xl"></vlm-input>
      </div>
    `
  })
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Read only value'
  }
};

export const Invalid: Story = {
  args: {
    invalid: true,
    touched: true,
    errors: [{ kind: 'required', message: 'This field is required.' }]
  }
};
