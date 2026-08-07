import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    theme: { control: 'select', options: ['primary', 'secondary'] },
    variant: { control: 'select', options: ['basic', 'text', 'outlined', 'fab'] }
  },
  args: {
    label: 'Click me',
    size: 'md',
    theme: 'primary',
    variant: 'basic',
    disabled: false,
    useIcon: false
  }
};

export default meta;
type Story = StoryObj<Button>;

export const Default: Story = {};

export const Variants: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-button [label]="label" [theme]="theme" size="md" variant="basic"></vlm-button>
        <vlm-button [label]="label" [theme]="theme" size="md" variant="text"></vlm-button>
        <vlm-button [label]="label" [theme]="theme" size="md" variant="outlined"></vlm-button>
      </div>
    `
  })
};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <vlm-button label="xs" size="xs"></vlm-button>
        <vlm-button label="sm" size="sm"></vlm-button>
        <vlm-button label="md" size="md"></vlm-button>
        <vlm-button label="lg" size="lg"></vlm-button>
        <vlm-button label="xl" size="xl"></vlm-button>
        <vlm-button label="xxl" size="xxl"></vlm-button>
      </div>
    `
  })
};

export const Fab: Story = {
  render: () => ({
    template: `<vlm-button label="Add" variant="fab" size="lg">
      <span preIcon>+</span>
    </vlm-button>`
  })
};

export const WithIcon: Story = {
  render: () => ({
    template: `<vlm-button label="Download" [useIcon]="true">
      <span preIcon>&#8595;</span>
    </vlm-button>`
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
