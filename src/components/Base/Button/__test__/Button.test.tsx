import { fireEvent, render, screen } from '@testing-library/react';
import { Button, ButtonProps } from '../';

const mockProps: ButtonProps = {
  text: 'Button',
  onClick: jest.fn(),
  type: 'button',
  variant: 'primary',
};

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render a button', () => {
    const { container } = render(<Button {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it('should render a submit button', () => {
    render(<Button {...mockProps} type="submit" variant="primary" />);

    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument();
  });

  it('should render a button with a className', () => {
    render(
      <Button
        {...mockProps}
        className="my-class"
        variant="secondary"
        type="button"
      />,
    );

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass(
      'my-class',
    );
  });

  it('should fire onClick callback', () => {
    render(<Button {...mockProps} onClick={mockProps.onClick} />);

    const button = screen.getByRole('button', { name: /button/i });

    fireEvent.click(button);

    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
