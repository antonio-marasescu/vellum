import { Preview } from '@storybook/angular-vite';
import '../src/styles/index.css';

const preview: Preview = {
  decorators: [
    story => {
      document.documentElement.setAttribute('data-theme', 'dark');
      return story();
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  }
};

export default preview;
