import { Schedule } from '../../types/Schedule';
import { dateTimeSeparator } from '../utils/dateTimeSeparator';
import './EstimatedArrival.scss';

type EstimatedArrivalProps = {
  schedule: Schedule;
};

export const EstimatedArrival: React.FC<EstimatedArrivalProps> = ({
  schedule,
}) => {
  return (
    <div className="arrival">
      <h3 className="arrival__title">Estimated Arrival</h3>
      <p className="arrival__date">
        {dateTimeSeparator(schedule.arrivalDate).date}
      </p>

      <p className="arrival__time">
        {schedule.start}-{schedule.end}
      </p>
    </div>
  );
};
