import { render, fireEvent, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { ToggleButton } from '../ToggleButton';

const mockProps = {
  text: 'text',
  isActive: false,
  onClick: jest.fn(),
};

describe('ToggleButton', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    act(() => {
      const root = createRoot(div);

      root.render(<ToggleButton {...mockProps} />);

      root.unmount();
    });
  });

  it('should match snapshot', () => {
    const { container } = render(<ToggleButton {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it('it should fire onClick function', () => {
    render(<ToggleButton {...mockProps} />);

    const button = screen.getByRole('button', { name: /text/i });

    expect(mockProps.onClick).toBeCalledTimes(0);

    fireEvent.click(button);

    expect(mockProps.onClick).toBeCalledTimes(1);
  });
});
