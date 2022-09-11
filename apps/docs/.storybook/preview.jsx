import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#121214'
      },
      {
        name: 'light',
        value: '#ffffff'
      }
    ]
  },
  docs: {
    theme: themes.dark,
  },
};
