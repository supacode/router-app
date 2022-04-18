import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouteItem } from 'components/RouteItem';
import { ScheduleStrategy } from 'types/Schedule';
import stops from 'mocks/stops.json';

const mockProps = {
  schedulingStrategy: ScheduleStrategy.Fixed,
  isLastStop: false,
  index: 0,
  stop: stops[0],
  canAddCargo: true,
};

beforeEach(() => {
  render(<RouteItem {...mockProps} />);
});

describe('RouteItem', () => {
  it('should have edit button by default', () => {
    screen.getByRole('button', { name: /edit/i });
  });

  it('should show schedule form when edit button is clicked', () => {
    const editButton = screen.getByRole('button', { name: /edit/i });

    userEvent.click(editButton);

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();

    expect(
      screen.queryByRole('button', { name: /edit/i }),
    ).not.toBeInTheDocument();
  });
});
