import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<Button>;

export const Default: Story = {
  render: () => ({
    props: {},
    template: `<vlm-button>Click me</vlm-button>`
  })
};
