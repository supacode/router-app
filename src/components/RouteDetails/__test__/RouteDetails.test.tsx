import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { RouteDetails, RouteDetailsProps } from 'components/RouteDetails';
import { ScheduleStrategy } from 'types/Schedule';
import stops from 'mocks/stops.json';

const mockProps: RouteDetailsProps = {
  stops,
  schedulingStrategy: ScheduleStrategy.Fixed,
  canAddCargo: true,
};

describe('RouteDetails', () => {
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
});
