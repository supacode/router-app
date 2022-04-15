import React from 'react';
import { LocationPinCount } from '../../assets/icons/LocationPinCount/LocationPinCount';
import { LocationPinFlag } from '../../assets/icons/LocationPinFlag/LocationPinFlag';
import type { Stop } from '../../types/Stop';
import { dateTransformer } from '../utils/dateTransformer';
import './RouteItemHead.scss';

type RouteItemHeadProps = {
  stop: Stop;
  count: number | string;
  isLastStop: boolean;
};

const RouteItemHead: React.FC<RouteItemHeadProps> = ({
  stop,
  count,
  isLastStop,
}) => {
  return (
    <div className="route-item-head">
      <span className="route-item__icon">
        {isLastStop ? <LocationPinFlag /> : <LocationPinCount count={count} />}
      </span>

      <div className="route-item-head__details">
        <h3 className="route-item-head__name">{stop.address}</h3>
        <p className="route-item-head__address">{stop.company}</p>

        <p className="route-item-head__opening">
          <span className="route-item-head__opening--label">
            Opening Hours:{' '}
          </span>
          <span className="route-item-head__opening--value">
            {dateTransformer(stop.openingHours.from)}
            {'-'}
            {dateTransformer(stop.openingHours.to)}
          </span>
        </p>
      </div>
    </div>
  );
};

const memoized = React.memo(RouteItemHead);

export { memoized as RouteItemHead };
