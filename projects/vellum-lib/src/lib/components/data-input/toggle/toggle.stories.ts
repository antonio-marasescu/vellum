import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { Toggle } from './toggle';

const meta: Meta<Toggle> = {
  title: 'Data Input/Toggle',
  component: Toggle,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    theme: { control: 'select', options: ['primary', 'secondary'] }
  },
  args: {
    id: 'notifications',
    label: 'Enable notifications',
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
    template: `<vlm-toggle ${argsToTemplate(args)}></vlm-toggle>`
  })
};

export default meta;
type Story = StoryObj<Toggle>;

export const Default: Story = {};

export const Themes: Story = {
  args: {
    checked: true
  },
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <vlm-toggle ${argsToTemplate(args, { exclude: ['theme', 'id'] })} id="theme-primary" theme="primary"></vlm-toggle>
        <vlm-toggle ${argsToTemplate(args, { exclude: ['theme', 'id'] })} id="theme-secondary" theme="secondary"></vlm-toggle>
      </div>
    `
  })
};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <vlm-toggle ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-xs" size="xs" label="xs"></vlm-toggle>
        <vlm-toggle ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-sm" size="sm" label="sm"></vlm-toggle>
        <vlm-toggle ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-md" size="md" label="md"></vlm-toggle>
        <vlm-toggle ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-lg" size="lg" label="lg"></vlm-toggle>
        <vlm-toggle ${argsToTemplate(args, { exclude: ['size', 'label', 'id'] })} id="size-xl" size="xl" label="xl"></vlm-toggle>
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
