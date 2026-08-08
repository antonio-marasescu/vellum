import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { Divider } from './divider';

const meta: Meta<Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  argTypes: {
    theme: { control: 'select', options: ['neutral', 'primary', 'secondary'] }
  },
  args: {
    vertical: false,
    inset: false,
    width: 1,
    theme: 'neutral'
  },
  render: args => ({
    props: args,
    template: `
      <div style="max-width: 320px;">
        <p>Above the divider.</p>
        <vlm-divider ${argsToTemplate(args)}></vlm-divider>
        <p>Below the divider.</p>
      </div>
    `
  })
};

export default meta;
type Story = StoryObj<Divider>;

export const Default: Story = {};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <vlm-divider ${argsToTemplate(args, { exclude: ['theme'] })} theme="neutral"></vlm-divider>
        <vlm-divider ${argsToTemplate(args, { exclude: ['theme'] })} theme="primary"></vlm-divider>
        <vlm-divider ${argsToTemplate(args, { exclude: ['theme'] })} theme="secondary"></vlm-divider>
      </div>
    `
  })
};

export const Vertical: Story = {
  args: {
    vertical: true
  },
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; height: 48px; gap: 12px;">
        <span>Left</span>
        <vlm-divider ${argsToTemplate(args)}></vlm-divider>
        <span>Right</span>
      </div>
    `
  })
};

export const Inset: Story = {
  args: {
    inset: true
  }
};

export const CustomWidth: Story = {
  args: {
    width: 4
  }
};
