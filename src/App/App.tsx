import { useState } from 'react';
import { RouteDetails } from '../components/RouteDetails/RouteDetails';
import { ScheduleStrategy } from '../types/Schedule';
import stops from '../data/stops.json';
import './App.scss';

export const App: React.FC = () => {
  const [schedulingStrategy, setSchedulingStrategy] =
    useState<ScheduleStrategy>(ScheduleStrategy.Flexible);
  const [canAddCargo, setCanAddCargo] = useState<boolean>(false);

  const schedulingStrategyHandler = (
    evt: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedStrategy = evt.target.value as ScheduleStrategy;

    setSchedulingStrategy(selectedStrategy);
  };

  const canAddCargoHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCanAddCargo(!canAddCargo);
  };

  return (
    <div className="app-container">
      <div className="app-container__control">
        <select
          defaultValue={schedulingStrategy}
          onChange={schedulingStrategyHandler}
        >
          <option value={ScheduleStrategy.Fixed}>Fixed</option>
          <option value={ScheduleStrategy.SemiFlexible}>Semi Flexible</option>
          <option value={ScheduleStrategy.Flexible}>Flexible</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={canAddCargo}
            onChange={canAddCargoHandler}
          />
          Can add cargo
        </label>
      </div>

      <RouteDetails
        stops={stops}
        schedulingStrategy={schedulingStrategy}
        canAddCargo={canAddCargo}
      />
    </div>
  );
};
