import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Input, InputProps } from 'components/Base/Input';

const mockProps: InputProps = {
  id: 'input-id',
  label: 'name',
  className: 'my-class',
  name: 'name',
  min: 2,
  max: 5,
  required: true,
  value: 'my name',
  append: '<span>icon</span>',
  prepend: 'Mr',
  onChangeHandler: jest.fn(),
  type: 'text',
};

describe('Input', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    act(() => {
      const root = createRoot(div);

      root.render(<Input {...mockProps} />);

      root.unmount();
    });
  });

  it('it should have correct props', () => {
    render(<Input {...mockProps} type="text" />);

    const input = screen.getByRole('textbox', { name: /name/i });

    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute('id', mockProps.id);
    expect(input).toHaveAttribute('min', `${mockProps.min}`);
    expect(input).toHaveAttribute('max', `${mockProps.max}`);
    expect(input).toHaveAttribute('type', 'text');
  });

  it('it should supplied class', () => {
    const { container } = render(<Input {...mockProps} type="text" />);

    expect(container.firstChild).toHaveClass(`${mockProps.className}`);
  });

  it('it should have append and prepend', () => {
    const { container } = render(<Input {...mockProps} type="text" />);

    expect(container.firstChild).toHaveTextContent(`${mockProps.prepend}`);
    expect(container.firstChild).toHaveTextContent(`${mockProps.prepend}`);
  });
});
