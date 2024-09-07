import { render, screen } from '@testing-library/react';

import RootLayout from './layout';

describe('RootLayout', () => {
  test('renders children correctly', () => {
    const testId = 'child-component';
    render(
      <RootLayout>
        <div data-testid={testId}>Test Child</div>
      </RootLayout>
    );

    const childComponent = screen.getByTestId(testId);
    expect(childComponent).toBeInTheDocument();
  });

  test('renders Header, ContentWrapper and Footer', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );

    const header = screen.getByRole('banner');
    const contentWrapper = screen.getByRole('main');
    const footer = screen.getByRole('contentinfo');

    expect(header).toBeInTheDocument();
    expect(contentWrapper).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
