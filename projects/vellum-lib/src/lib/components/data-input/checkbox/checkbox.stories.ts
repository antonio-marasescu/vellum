import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { Checkbox } from './checkbox';

const meta: Meta<Checkbox> = {
  title: 'Data Input/Checkbox',
  component: Checkbox,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    theme: { control: 'select', options: ['primary', 'secondary'] }
  },
  args: {
    id: 'terms',
    label: 'Accept terms',
    size: 'md',
    theme: 'primary',
    required: false,
    disabled: false,
    invalid: false,
    touched: false,
    errors: []
  },
  render: args => ({
    props: args,
    template: `<vlm-checkbox ${argsToTemplate(args)}></vlm-checkbox>`
  })
};

export default meta;
type Story = StoryObj<Checkbox>;

export const Default: Story = {};

export const Themes: Story = {
  args: {
    checked: true
  },
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <vlm-checkbox ${argsToTemplate(args, { exclude: ['theme', 'id'] })} id="theme-primary" theme="primary"></vlm-checkbox>
        <vlm-checkbox ${argsToTemplate(args, { exclude: ['theme', 'id'] })} id="theme-secondary" theme="secondary"></vlm-checkbox>
      </div>
    `
  })
};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <vlm-checkbox ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-xs" size="xs" label="xs"></vlm-checkbox>
        <vlm-checkbox ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-sm" size="sm" label="sm"></vlm-checkbox>
        <vlm-checkbox ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-md" size="md" label="md"></vlm-checkbox>
        <vlm-checkbox ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-lg" size="lg" label="lg"></vlm-checkbox>
        <vlm-checkbox ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-xl" size="xl" label="xl"></vlm-checkbox>
      </div>
    `
  })
};

export const Checked: Story = {
  args: {
    checked: true
  }
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    checked: true
  }
};

export const Invalid: Story = {
  args: {
    invalid: true,
    touched: true,
    errors: [{ kind: 'required', message: 'This field is required.' }]
  }
};
