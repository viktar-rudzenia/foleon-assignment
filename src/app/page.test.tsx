import { render, screen } from '@testing-library/react';

import { AllRoutesEnum } from '@/utils/constants';
import Home from './page';

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(
      screen.getByText('This is the home page of the Foleon Assignment app.')
    ).toBeInTheDocument();
  });

  it('contains link to publications page', () => {
    render(<Home />);
    const linkElement = screen.getByText('Go to publications page');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', AllRoutesEnum.PUBLICATIONS);
  });
});
