import { LocationPinCount } from 'assets/icons/LocationPinCount/LocationPinCount';
import { LocationPinFlag } from 'assets/icons/LocationPinFlag/LocationPinFlag';
import type { Stop } from 'types/Stop';
import './RouteItemHead.scss';

type RouteItemHeadProps = {
  stop: Stop;
  address: string;
  company: string;
  count: number | string;
  openingHours: string;
  closingHours: string;
  isLastStop: boolean;
};

export const RouteItemHead: React.FC<RouteItemHeadProps> = ({
  count,
  address,
  closingHours,
  openingHours,
  company,
  isLastStop,
}) => {
  return (
    <div className="route-item-head">
      <span className="route-item__icon">
        {isLastStop ? <LocationPinFlag /> : <LocationPinCount count={count} />}
      </span>

      <div className="route-item-head__details">
        <h3 className="route-item-head__name">{address}</h3>
        <p className="route-item-head__address">{company}</p>

        <p className="route-item-head__opening">
          <span className="route-item-head__opening--label">
            Opening Hours:{' '}
          </span>
          <span className="route-item-head__opening--value">
            {openingHours}
            {'-'}
            {closingHours}
          </span>
        </p>
      </div>
    </div>
  );
};
