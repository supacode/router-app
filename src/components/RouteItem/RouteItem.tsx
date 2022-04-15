import { ScheduleStrategy } from '../../types/Schedule';
import type { Stop } from '../../types/Stop';

type RouteItemProps = {
  stop: Stop;
  isLastStop: boolean;
  index: number;
  schedulingStrategy: ScheduleStrategy;
  canAddCargo: boolean;
};

export const RouteItem: React.FC<RouteItemProps> = () => {
  return (
    <>
      <p>Route Item</p>
    </>
  );
};

export default RouteItem;
