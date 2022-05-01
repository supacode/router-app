import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouteItem, RouteItemProps } from '../RouteItem';
import { ScheduleStrategy } from 'types/Schedule';
import stops from 'mocks/stops.json';
import { editArrivalTime } from './editArrivalTime';

const mockProps: RouteItemProps = {
  schedulingStrategy: ScheduleStrategy.Fixed,
  isLastStop: true,
  index: 0,
  stop: stops[0],
  canAddCargo: true,
};

describe('RouteItem', () => {
  it('should have edit button by default', () => {
    render(<RouteItem {...mockProps} />);

    screen.getByRole('button', { name: /edit/i });
  });

  it('should show schedule form when edit button is clicked', () => {
    render(<RouteItem {...mockProps} />);

    const editButton = screen.getByRole('button', { name: /edit/i });

    userEvent.click(editButton);

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();

    expect(
      screen.queryByRole('button', { name: /edit/i }),
    ).not.toBeInTheDocument();
  });

  it('should show add cargo form when add cargo button is clicked', () => {
    render(<RouteItem {...mockProps} />);

    const addCargoButton = screen.getByRole('button', {
      name: /Ladung hinzufügen/i,
    });

    userEvent.click(addCargoButton);

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  });

  it('should edit only arrival date when strategy is fixed', () => {
    render(<RouteItem {...mockProps} />);

    const editButton = screen.getByRole('button', {
      name: /edit/i,
    });

    userEvent.click(editButton);

    expect(
      document.querySelector('input[name="arrivalDate"]'),
    ).toBeInTheDocument();

    expect(
      document.querySelector('input[name="start"]'),
    ).not.toBeInTheDocument();

    expect(document.querySelector('input[name="end"]')).not.toBeInTheDocument();
  });

  it('should edit both arrival date when and from/to strategy is semi flexible', () => {
    editArrivalTime(mockProps, ScheduleStrategy.SemiFlexible);
  });

  it('should edit both arrival date when and from/to strategy is flexible', () => {
    editArrivalTime(mockProps, ScheduleStrategy.Flexible);
  });
});
