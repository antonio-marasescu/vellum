import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { Select } from './select';

const meta: Meta<Select> = {
  title: 'Data Input/Select',
  component: Select,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    theme: { control: 'select', options: ['primary', 'secondary'] },
    variant: { control: 'select', options: ['basic', 'outlined'] }
  },
  args: {
    id: 'country',
    label: 'Country',
    size: 'md',
    theme: 'primary',
    variant: 'basic',
    required: false,
    disabled: false,
    invalid: false,
    touched: false,
    errors: []
  },
  render: args => ({
    props: args,
    template: `
      <vlm-select ${argsToTemplate(args)}>
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="mx">Mexico</option>
      </vlm-select>
    `
  })
};

export default meta;
type Story = StoryObj<Select>;

export const Default: Story = {};

export const Variants: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 280px;">
        <vlm-select ${argsToTemplate(args, { exclude: ['variant', 'id'] })} id="variant-basic" variant="basic">
          <option value="us">United States</option>
          <option value="ca">Canada</option>
        </vlm-select>
        <vlm-select ${argsToTemplate(args, { exclude: ['variant', 'id'] })} id="variant-outlined" variant="outlined">
          <option value="us">United States</option>
          <option value="ca">Canada</option>
        </vlm-select>
      </div>
    `
  })
};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 280px;">
        <vlm-select ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-xs" size="xs" label="xs">
          <option value="us">United States</option>
        </vlm-select>
        <vlm-select ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-sm" size="sm" label="sm">
          <option value="us">United States</option>
        </vlm-select>
        <vlm-select ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-md" size="md" label="md">
          <option value="us">United States</option>
        </vlm-select>
        <vlm-select ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-lg" size="lg" label="lg">
          <option value="us">United States</option>
        </vlm-select>
        <vlm-select ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-xl" size="xl" label="xl">
          <option value="us">United States</option>
        </vlm-select>
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
    value: 'us'
  }
};

export const Invalid: Story = {
  args: {
    invalid: true,
    touched: true,
    errors: [{ kind: 'required', message: 'This field is required.' }]
  }
};
