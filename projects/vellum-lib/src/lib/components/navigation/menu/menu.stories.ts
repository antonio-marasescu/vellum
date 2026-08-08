import type { Meta, StoryObj } from '@storybook/angular-vite';
import { argsToTemplate, moduleMetadata } from '@storybook/angular-vite';
import { MenuItem } from './menu-item/menu-item';
import { Menu } from './menu';

const meta: Meta<Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  decorators: [moduleMetadata({ imports: [MenuItem] })],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    theme: { control: 'select', options: ['primary', 'secondary', 'info', 'success', 'warning'] }
  },
  args: {
    size: 'md',
    theme: 'primary',
    disabled: false,
    vertical: true
  },
  render: args => ({
    props: args,
    template: `
      <div style="max-width: 220px;">
        <vlm-menu ${argsToTemplate(args)}>
          <vlm-menu-item>Home</vlm-menu-item>
          <vlm-menu-item>About</vlm-menu-item>
          <vlm-menu-item>
            Products
            <vlm-menu menuItems>
              <vlm-menu-item>All products</vlm-menu-item>
              <vlm-menu-item>Electronics</vlm-menu-item>
              <vlm-menu-item>Clothing</vlm-menu-item>
            </vlm-menu>
          </vlm-menu-item>
        </vlm-menu>
      </div>
    `
  })
};

export default meta;
type Story = StoryObj<Menu>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    vertical: false
  },
  render: args => ({
    props: args,
    template: `
      <vlm-menu ${argsToTemplate(args)}>
        <vlm-menu-item [active]="true">Home</vlm-menu-item>
        <vlm-menu-item>About</vlm-menu-item>
        <vlm-menu-item>Contact</vlm-menu-item>
      </vlm-menu>
    `
  })
};

export const Themes: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 220px;">
        <vlm-menu ${argsToTemplate(args, { exclude: ['theme'] })} theme="primary">
          <vlm-menu-item [active]="true">Primary</vlm-menu-item>
          <vlm-menu-item>Other</vlm-menu-item>
        </vlm-menu>
        <vlm-menu ${argsToTemplate(args, { exclude: ['theme'] })} theme="secondary">
          <vlm-menu-item [active]="true">Secondary</vlm-menu-item>
          <vlm-menu-item>Other</vlm-menu-item>
        </vlm-menu>
        <vlm-menu ${argsToTemplate(args, { exclude: ['theme'] })} theme="info">
          <vlm-menu-item [active]="true">Info</vlm-menu-item>
          <vlm-menu-item>Other</vlm-menu-item>
        </vlm-menu>
        <vlm-menu ${argsToTemplate(args, { exclude: ['theme'] })} theme="success">
          <vlm-menu-item [active]="true">Success</vlm-menu-item>
          <vlm-menu-item>Other</vlm-menu-item>
        </vlm-menu>
        <vlm-menu ${argsToTemplate(args, { exclude: ['theme'] })} theme="warning">
          <vlm-menu-item [active]="true">Warning</vlm-menu-item>
          <vlm-menu-item>Other</vlm-menu-item>
        </vlm-menu>
      </div>
    `
  })
};

export const Nested: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="max-width: 220px;">
        <vlm-menu ${argsToTemplate(args)}>
          <vlm-menu-item [active]="true">Home</vlm-menu-item>
          <vlm-menu-item>About</vlm-menu-item>
          <vlm-menu-item>
            Products
            <vlm-menu menuItems>
              <vlm-menu-item>All products</vlm-menu-item>
              <vlm-menu-item>Electronics</vlm-menu-item>
              <vlm-menu-item>Clothing</vlm-menu-item>
            </vlm-menu>
          </vlm-menu-item>
        </vlm-menu>
      </div>
    `
  })
};

export const NestedHorizontal: Story = {
  args: {
    vertical: false
  },
  render: args => ({
    props: args,
    template: `
      <vlm-menu ${argsToTemplate(args)}>
        <vlm-menu-item [active]="true">Home</vlm-menu-item>
        <vlm-menu-item>About</vlm-menu-item>
        <vlm-menu-item>
          Products
          <vlm-menu menuItems>
            <vlm-menu-item>All products</vlm-menu-item>
            <vlm-menu-item>Electronics</vlm-menu-item>
            <vlm-menu-item>Clothing</vlm-menu-item>
          </vlm-menu>
        </vlm-menu-item>
      </vlm-menu>
    `
  })
};

export const DeeplyNested: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="max-width: 240px;">
        <vlm-menu ${argsToTemplate(args)}>
          <vlm-menu-item [active]="true">Home</vlm-menu-item>
          <vlm-menu-item>About</vlm-menu-item>
          <vlm-menu-item>
            Products
            <vlm-menu menuItems>
              <vlm-menu-item>
                Electronics
                <vlm-menu menuItems>
                  <vlm-menu-item>
                    Phones
                    <vlm-menu menuItems>
                      <vlm-menu-item>Smartphones</vlm-menu-item>
                      <vlm-menu-item>Feature phones</vlm-menu-item>
                    </vlm-menu>
                  </vlm-menu-item>
                  <vlm-menu-item>Laptops</vlm-menu-item>
                </vlm-menu>
              </vlm-menu-item>
              <vlm-menu-item>Clothing</vlm-menu-item>
            </vlm-menu>
          </vlm-menu-item>
        </vlm-menu>
      </div>
    `
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
