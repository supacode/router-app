import { fireEvent, render, screen } from '@testing-library/react';
import { RouteItem, RouteItemProps } from '../RouteItem';
import { ScheduleStrategy } from 'types/Schedule';

// Reusable test case for editing schedule start/end when
// scheduling strategy is flexible | semi-flexible
export const editArrivalTime = (
  props: RouteItemProps,
  schedulingStrategy: ScheduleStrategy,
) => {
  render(<RouteItem {...props} schedulingStrategy={schedulingStrategy} />);

  const editButton = screen.getByRole('button', { name: /edit/i });

  fireEvent.click(editButton);

  expect(document.querySelector('input[name="start"]')).toBeInTheDocument();
  expect(document.querySelector('input[name="end"]')).toBeInTheDocument();
};
