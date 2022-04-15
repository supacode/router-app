import { fireEvent, render, screen } from '@testing-library/react';
import { ScheduleForm } from '../';
import stops from '../../../mocks/stops.json';
import schedules from '../../../mocks/schedules.json';

const mockFormProps = {
  formId: 'a',
  isFixed: false,
  stop: stops[0],
  schedule: schedules[0],
  isFlexible: true,
  isFirstStop: true,
  canEditForm: true,
  isSemiFlexible: true,
  onFormSubmit: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ScheduleForm', () => {
  it('should match snapshot', () => {
    const { container } = render(<ScheduleForm {...mockFormProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should submit if form is valid', () => {
    render(<ScheduleForm {...mockFormProps} />);

    const form = screen.getByTestId(mockFormProps.formId);

    fireEvent.submit(form);

    expect(mockFormProps.onFormSubmit).toHaveBeenCalledTimes(1);
  });
});
