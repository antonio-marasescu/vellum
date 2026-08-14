import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate } from '@storybook/angular-vite';
import { Icon } from './icon';
import { ICON_LIST } from '../../../utils/icons';

const meta: Meta<Icon> = {
  title: 'Data Display/Icon',
  component: Icon,
  argTypes: {
    icon: { control: 'select', options: ICON_LIST },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 16, 20, 24, 28, 32]
    },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'neutral']
    }
  },
  args: {
    icon: 'heart',
    size: 'md',
    theme: 'neutral',
    alt: ''
  },
  render: args => ({
    props: args,
    template: `<vlm-icon ${argsToTemplate(args)}></vlm-icon>`
  })
};

export default meta;
type Story = StoryObj<Icon>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <vlm-icon ${argsToTemplate(args, { exclude: ['size'] })} size="xs"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['size'] })} size="sm"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['size'] })} size="md"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['size'] })} size="lg"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['size'] })} size="xl"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['size'] })} size="xxl"></vlm-icon>
      </div>
    `
  })
};

export const CustomSize: Story = {
  args: {
    size: 48
  }
};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <vlm-icon ${argsToTemplate(args, { exclude: ['icon', 'theme'] })} icon="heart" theme="primary"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['icon', 'theme'] })} icon="star" theme="warning"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['icon', 'theme'] })} icon="check-circle" theme="success"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['icon', 'theme'] })} icon="alert-triangle" theme="error"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['icon', 'theme'] })} icon="info" theme="info"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['icon', 'theme'] })} icon="user" theme="secondary"></vlm-icon>
        <vlm-icon ${argsToTemplate(args, { exclude: ['icon', 'theme'] })} icon="settings" theme="neutral"></vlm-icon>
      </div>
    `
  })
};

export const Gallery: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 16px;">
        ${ICON_LIST.map(
          icon => `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 8px;">
            <vlm-icon ${argsToTemplate(args, { exclude: ['icon'] })} icon="${icon}"></vlm-icon>
            <span style="font-size: 10px; text-align: center; color: var(--vlm-color-text-muted);">${icon}</span>
          </div>
        `
        ).join('')}
      </div>
    `
  })
};
