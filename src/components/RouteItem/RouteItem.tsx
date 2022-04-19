import React, { useState } from 'react';
import type { Stop } from 'types/Stop';
import { AddCargoForm } from 'components/AddCargoForm';
import { ScheduleForm } from 'components/ScheduleForm';
import { RouteItemHead } from 'components/RouteItemHead/RouteItemHead';
import { Schedule, ScheduleStrategy } from 'types/Schedule';
import { dateTimeSeparator } from 'utils/dateTimeSeparator';
import { EstimatedArrival } from 'components/EstimatedArrival';
import { Button } from 'components/Base/Button';
import { useScheduleFormStatus } from 'hooks/useScheduleFormStatus';
import { ToggleButton } from 'components/Base/ToggleButton';
import './RouteItem.scss';

export type RouteItemProps = {
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
    setIsAddingCargo(true);
  };

  const onScheduleFormSave = (schedule: Schedule) => {
    setSchedule(schedule);
    setIsEditingSchedule(false);
  };

  const onScheduleFormCancel = () => {
    setIsEditingSchedule(false);
  };

  const onCargoFormCancel = () => {
    setIsAddingCargo(false);
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
    <article className="route-item">
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
              <Button
                data-testid="edit-schedule-button"
                onClick={() => setIsEditingSchedule(true)}
                text="Edit"
              />
            )}
          </div>
        )}
      </div>

      <div className="route-item__details">
        {canAddCargo && !isAddingCargo && (
          <div className="toggle-button__wrapper">
            <ToggleButton
              onClick={setIsAddingCargoHandler}
              isActive={!isAddingCargo}
              text={'Ladung hinzufügen'}
            />
          </div>
        )}

        {isAddingCargo && <AddCargoForm onCancel={onCargoFormCancel} />}
      </div>
    </article>
  );
};

export default RouteItem;
