import React, { useState } from 'react';
import type { Stop } from '../../types/Stop';
import { AddCargoForm } from '../AddCargoForm';
import { ScheduleForm } from '../ScheduleForm';
import { RouteItemHead } from '../RouteItemHead/RouteItemHead';
import { Schedule, ScheduleStrategy } from '../../types/Schedule';
import { dateTimeSeparator } from '../utils/dateTimeSeparator';
import { EstimatedArrival } from '../EstimatedArrival';
import { Button } from '../Base/Button';
import { useScheduleFormStatus } from '../../hooks/useScheduleFormVisibility';
import { ToggleButton } from '../Base/ToggleButton';
import './RouteItem.scss';

type RouteItemProps = {
  stop: Stop;
  isLastStop: boolean;
  index: number;
  schedulingStrategy: ScheduleStrategy;
  canAddCargo: boolean;
};

export const RouteItem: React.FC<RouteItemProps> = ({
  stop,
  index,
  canAddCargo,
  isLastStop,
  schedulingStrategy,
}) => {
  const isFlexible = schedulingStrategy === ScheduleStrategy.Flexible;
  const isSemiFlexible = schedulingStrategy === ScheduleStrategy.SemiFlexible;
  const isFixed = schedulingStrategy === ScheduleStrategy.Fixed;
  const isFirstStop = index === 0;
  const [isAddingCargo, setIsAddingCargo] = useState<boolean>(false); // track cargo adding form visibility
  const [isEditingSchedule, setIsEditingSchedule] = useState<boolean>(false); // track schedule editing form status
  const [canUpdateSchedule, setCanUpdateSchedule] = useState<boolean>(false); // track schedule editing form status

  const [schedule, setSchedule] = useState<Schedule>({
    arrivalDate: dateTimeSeparator(stop.schedule.end).date,
    end: dateTimeSeparator(stop.schedule.end).time,
    start: dateTimeSeparator(stop.schedule.start).time,
  });

  // Toggle schedule form visibility on button toggle
  const setIsAddingCargoHandler = () => {
    setIsAddingCargo(!isAddingCargo);
  };

  const onScheduleFormSave = (schedule: Schedule) => {
    setSchedule(schedule);
    setIsEditingSchedule(false);
  };

  const onScheduleFormCancel = () => {
    setIsEditingSchedule(false);
  };

  // Custom hook that handles logic for schedule form visibility,
  useScheduleFormStatus({
    isFirstStop,
    isFixed,
    isFlexible,
    isSemiFlexible,
    updateScheduleStatus: setCanUpdateSchedule,
  });

  return (
    <div className="route-item">
      <div className="route-item__head">
        <RouteItemHead stop={stop} count={index + 1} isLastStop={isLastStop} />

        {canUpdateSchedule && isEditingSchedule ? (
          <div className="schedule-form__wrapper">
            <ScheduleForm
              formId={`schedule-form-${index}`}
              canEditForm={canUpdateSchedule}
              stop={stop}
              schedule={schedule}
              isFirstStop={isFirstStop}
              isFixed={isFixed}
              onFormCancel={onScheduleFormCancel}
              isFlexible={isFlexible}
              isSemiFlexible={isSemiFlexible}
              onFormSubmit={onScheduleFormSave}
            />

            <ToggleButton isActive={true} text="Gate Referenz" />
          </div>
        ) : (
          /* If the user is not editing the form, then we should show the schedule details */
          <div className="route-item__estimate">
            <EstimatedArrival schedule={schedule} />

            {canUpdateSchedule && (
              <Button onClick={() => setIsEditingSchedule(true)} text="Edit" />
            )}
          </div>
        )}
      </div>

      <div className="route-item__details">
        {canAddCargo && (
          <ToggleButton
            onClick={setIsAddingCargoHandler}
            isActive={!isAddingCargo}
            text={'Ladung hinzufügen'}
          />
        )}

        {isAddingCargo && (
          <AddCargoForm cancelHandler={setIsAddingCargoHandler} />
        )}
      </div>
    </div>
  );
};

export default RouteItem;
