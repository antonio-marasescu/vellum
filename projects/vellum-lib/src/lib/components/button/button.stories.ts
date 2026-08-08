import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { fn } from 'storybook/test';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Button',
  component: Button,
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
    clicked: { action: 'clicked' }
  },
  args: {
    label: 'Click me',
    size: 'md',
    theme: 'primary',
    variant: 'basic',
    disabled: false,
    useIcon: false,
    clicked: fn()
  },
  render: args => ({
    props: args,
    template: `<vlm-button ${argsToTemplate(args)}></vlm-button>`
  })
};

export default meta;
type Story = StoryObj<Button>;

export const Default: Story = {};

export const Variants: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-button ${argsToTemplate(args, { exclude: ['variant'] })} variant="basic"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['variant'] })} variant="text"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['variant'] })} variant="outlined"></vlm-button>
      </div>
    `
  })
};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-button ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="primary" label="Primary"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="secondary" label="Secondary"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="info" label="Info"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="success" label="Success"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['theme', 'label'] })} theme="warning" label="Warning"></vlm-button>
      </div>
    `
  })
};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-button ${argsToTemplate(args, { exclude: ['size', 'label'] })} size="xs" label="xs"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['size', 'label'] })} size="sm" label="sm"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['size', 'label'] })} size="md" label="md"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['size', 'label'] })} size="lg" label="lg"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['size', 'label'] })} size="xl" label="xl"></vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['size', 'label'] })} size="xxl" label="xxl"></vlm-button>
      </div>
    `
  })
};

export const Fab: Story = {
  args: {
    size: 'lg'
  },
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-button ${argsToTemplate(args, { exclude: ['variant'] })} variant="fab">
          <span preIcon>+</span>
        </vlm-button>
        <vlm-button ${argsToTemplate(args, { exclude: ['variant'] })} variant="fab-outlined">
          <span preIcon>+</span>
        </vlm-button>
      </div>
    `
  })
};

export const WithIcon: Story = {
  args: {
    label: 'Download',
    useIcon: true
  },
  render: args => ({
    props: args,
    template: `<vlm-button ${argsToTemplate(args)}>
      <span preIcon>&#8595;</span>
    </vlm-button>`
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
