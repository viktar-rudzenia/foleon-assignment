import { render, screen } from '@testing-library/react';

import { AllRoutesEnum } from '@/utils/constants';
import NotFound from './not-found';

describe('NotFound component', () => {
  it('renders without crashing', () => {
    render(<NotFound />);
    expect(screen.getByText('Page not found...')).toBeInTheDocument();
    expect(
      screen.getByText("We're unable to find the page you're looking for")
    ).toBeInTheDocument();
  });

  it('contains link to home page', () => {
    render(<NotFound />);
    const linkElement = screen.getByText('Back to Home');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', AllRoutesEnum.HOME);
  });
});
