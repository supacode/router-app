import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { RouteDetails, RouteDetailsProps } from '../RouteDetails';
import { ScheduleStrategy } from 'types/Schedule';
import { editOnlyFirstStop } from './editOnlyFirstStop';
import stops from 'mocks/stops.json';

const mockProps: RouteDetailsProps = {
  stops,
  schedulingStrategy: ScheduleStrategy.Fixed,
  canAddCargo: true,
};

describe('RouteDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');

    act(() => {
      const root = createRoot(div);

      root.render(<RouteDetails {...mockProps} />);

      root.unmount();
    });
  });

  it('it should have a title', () => {
    render(<RouteDetails {...mockProps} />);

    const title = screen.getByRole('heading', { name: /route/i });

    expect(title).toBeInTheDocument();
  });

  it('it should have specific stops', () => {
    render(<RouteDetails {...mockProps} />);

    const stops = screen.getAllByRole('article');

    expect(stops).toHaveLength(mockProps.stops.length);
  });

  it('should edit only the first stop if the scheduling strategy is fixed', () => {
    editOnlyFirstStop(ScheduleStrategy.Fixed, mockProps);
  });

  it('should edit only the first stop if the scheduling strategy is semiFlexible', () => {
    editOnlyFirstStop(ScheduleStrategy.SemiFlexible, mockProps);
  });

  it('should edit all stops if the scheduling strategy is flexible', () => {
    const props = {
      ...mockProps,
      schedulingStrategy: ScheduleStrategy.Flexible,
    };

    render(<RouteDetails {...props} />);

    const stops = screen.getAllByRole('article');

    stops.forEach((stop) => {
      expect(stop).toHaveTextContent(/edit/i);
    });
  });

  // Todo: Add tests for the other conditions
});
