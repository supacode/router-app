import { render, screen } from '@testing-library/react';
import { ScheduleStrategy } from 'types/Schedule';
import { RouteDetails, RouteDetailsProps } from '../RouteDetails';

// Reusable test case since flexible and fixed scheduling strategies almost the same
export const editOnlyFirstStop = (
  strategy: ScheduleStrategy,
  mockProps: RouteDetailsProps,
) => {
  const props = {
    ...mockProps,
    schedulingStrategy: strategy,
  };

  render(<RouteDetails {...props} />);

  const stops = screen.getAllByRole('article');

  stops.forEach((stop, index) => {
    if (index === 0) {
      expect(stop).toHaveTextContent(/edit/i);
    } else {
      expect(stop).not.toHaveTextContent(/edit/i);
    }
  });
};
