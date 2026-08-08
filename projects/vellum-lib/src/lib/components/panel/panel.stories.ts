import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { Panel } from './panel';

const meta: Meta<Panel> = {
  title: 'Panel',
  component: Panel,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'neutral']
    }
  },
  args: {
    size: 'md',
    theme: 'primary',
    disabled: false,
    expanded: false
  },
  render: args => ({
    props: args,
    template: `
      <div style="max-width: 400px;">
        <vlm-panel ${argsToTemplate(args)}>
          <span panelHeader>What is Vellum?</span>
          A personal Angular component library, published to npm as vellum-lib.
        </vlm-panel>
      </div>
    `
  })
};

export default meta;
type Story = StoryObj<Panel>;

export const Default: Story = {};

export const ExpandedByDefault: Story = {
  args: {
    expanded: true
  }
};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
        <vlm-panel ${argsToTemplate(args, { exclude: ['theme'] })} theme="primary">
          <span panelHeader>Primary</span>
          Panel content.
        </vlm-panel>
        <vlm-panel ${argsToTemplate(args, { exclude: ['theme'] })} theme="secondary">
          <span panelHeader>Secondary</span>
          Panel content.
        </vlm-panel>
        <vlm-panel ${argsToTemplate(args, { exclude: ['theme'] })} theme="info">
          <span panelHeader>Info</span>
          Panel content.
        </vlm-panel>
        <vlm-panel ${argsToTemplate(args, { exclude: ['theme'] })} theme="success">
          <span panelHeader>Success</span>
          Panel content.
        </vlm-panel>
        <vlm-panel ${argsToTemplate(args, { exclude: ['theme'] })} theme="warning">
          <span panelHeader>Warning</span>
          Panel content.
        </vlm-panel>
        <vlm-panel ${argsToTemplate(args, { exclude: ['theme'] })} theme="neutral">
          <span panelHeader>Neutral</span>
          Panel content.
        </vlm-panel>
      </div>
    `
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
