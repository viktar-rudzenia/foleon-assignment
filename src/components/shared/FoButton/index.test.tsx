import { render, screen, fireEvent } from '@testing-library/react';

import FoButton from './index';

// Mock the styles module to avoid importing actual CSS
jest.mock('./index.module.scss', () => ({
  button: 'mocked-button-class',
}));

describe('FoButton Component', () => {
  it('should render the button with children', () => {
    render(<FoButton>Click Me</FoButton>);

    // Assert that the button is rendered with the correct text
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should trigger onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<FoButton onClick={handleClick}>Click Me</FoButton>);

    // Click the button
    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);

    // Assert that the click handler was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply the default className from styles', () => {
    render(<FoButton>Click Me</FoButton>);

    // Assert that the default class name is applied
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass('mocked-button-class');
  });

  it('should append additionalClassName when provided', () => {
    render(<FoButton additionalClassName="extra-class">Click Me</FoButton>);

    // Assert that both default and additional class names are applied
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass('mocked-button-class');
    expect(buttonElement).toHaveClass('extra-class');
  });

  it('should render without crashing when no children are passed', () => {
    render(<FoButton />);

    // Assert that the button is rendered without children
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeEmptyDOMElement();
  });

  it('should handle undefined onClick prop without errors', () => {
    render(<FoButton>Click Me</FoButton>);

    // Click the button (even without onClick handler)
    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);

    // No assertion needed, test will fail if there's an error
  });
});
