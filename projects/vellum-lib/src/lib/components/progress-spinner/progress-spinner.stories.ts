import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { ProgressSpinner } from './progress-spinner';

const meta: Meta<ProgressSpinner> = {
  title: 'Progress Spinner',
  component: ProgressSpinner,
  argTypes: {
    mode: { control: 'select', options: ['determinate', 'indeterminate'] },
    theme: { control: 'select', options: ['primary', 'secondary', 'info', 'success', 'warning'] }
  },
  args: {
    mode: 'indeterminate',
    theme: 'primary',
    value: 0,
    diameter: 40,
    strokeWidth: 4
  },
  render: args => ({
    props: args,
    template: `<vlm-progress-spinner ${argsToTemplate(args)}></vlm-progress-spinner>`
  })
};

export default meta;
type Story = StoryObj<ProgressSpinner>;

export const Default: Story = {};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <vlm-progress-spinner ${argsToTemplate(args, { exclude: ['theme'] })} theme="primary"></vlm-progress-spinner>
        <vlm-progress-spinner ${argsToTemplate(args, { exclude: ['theme'] })} theme="secondary"></vlm-progress-spinner>
        <vlm-progress-spinner ${argsToTemplate(args, { exclude: ['theme'] })} theme="info"></vlm-progress-spinner>
        <vlm-progress-spinner ${argsToTemplate(args, { exclude: ['theme'] })} theme="success"></vlm-progress-spinner>
        <vlm-progress-spinner ${argsToTemplate(args, { exclude: ['theme'] })} theme="warning"></vlm-progress-spinner>
      </div>
    `
  })
};

export const Determinate: Story = {
  args: {
    mode: 'determinate',
    value: 65
  }
};

export const CustomSize: Story = {
  args: {
    diameter: 96,
    strokeWidth: 8
  }
};
