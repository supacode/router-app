import React from 'react';
import type { Stop } from '../../types/Stop';
import { RouteItem } from '../RouteItem';
import { ScheduleStrategy } from '../../types/Schedule';
import './RouteDetails.scss';

type RouteDetailsProps = {
  stops: Stop[];
  schedulingStrategy: ScheduleStrategy;
  canAddCargo: boolean;
};

export const RouteDetails: React.FC<RouteDetailsProps> = ({
  canAddCargo,
  schedulingStrategy,
  stops,
}) => {
  return (
    <div className="route-details">
      <h2 className="route-details__title">Route</h2>

      {stops &&
        stops.map((stop, index) => (
          <RouteItem
            key={index}
            index={index}
            stop={stop}
            isLastStop={index === stops.length - 1}
            schedulingStrategy={schedulingStrategy}
            canAddCargo={canAddCargo}
          />
        ))}
    </div>
  );
};
