import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => Promise.resolve,
      },
    };
  },
}));
