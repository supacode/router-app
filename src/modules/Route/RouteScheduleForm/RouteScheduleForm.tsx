import { useState } from 'react';
import { Stop } from 'types/Stop';
import { Schedule } from 'types/Schedule';
import { Input } from 'components/ui/Input';
import { dateTimeSeparator } from 'utils/dateTimeSeparator';
import { Button } from 'components/ui/Button';
import './RouteScheduleForm.scss';

type RouteScheduleProps = {
  isSemiFlexible: boolean;
  isFixed: boolean;
  schedule: Schedule;
  isFlexible: boolean;
  isFirstStop: boolean;
  formId: string;
  stop: Stop;
  canEditForm: boolean;
  onFormSubmit?: (schedule: Schedule) => void;
  onFormCancel?: () => void;
};

export const RouteScheduleForm: React.FC<RouteScheduleProps> = ({
  formId,
  isFixed,
  isFlexible,
  isFirstStop,
  schedule,
  canEditForm,
  isSemiFlexible,
  stop,
  onFormCancel,
  onFormSubmit,
}) => {
  // Our local state for initial form has three states:
  // 1.  arrivalDate: the date the stop is expected to arrive
  // 2.  start:the time the stop is going to start
  // 3.  end: the time value the stop is going to end
  const [formData, setFormData] = useState<Schedule>(schedule);

  // Handler for submitting form
  const onSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // Lifting formState state up to update the schedule
    onFormSubmit && onFormSubmit(formData);
  };

  // Handler for form input change
  const onInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // and update formData state
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const onCancelHandler = () => {
    onFormCancel && onFormCancel();
  };

  // Arrival date input field const,
  // breaking a const here because we want to
  // conditionally render it in 2 different conditions
  const dateInput = (
    <Input
      type="date"
      name="arrivalDate"
      value={dateTimeSeparator(schedule.arrivalDate).date}
      id={`${formId}-arrival-date`}
      onChangeHandler={onInputChangeHandler}
      className="arrival-date-input"
      required
    />
  );

  // Start time input fields const,
  // this is rendered conditionally in different conditions,
  // depending on the scheduling strategy
  const timeInputs = (
    <>
      <Input
        type="time"
        name="start"
        id={`${formId}-from`}
        required
        value={dateTimeSeparator(stop.schedule.start).time}
        prepend="Von"
        onChangeHandler={onInputChangeHandler}
      />

      <Input
        type="time"
        name="end"
        id={`${formId}-to`}
        prepend="Bis"
        required
        onChangeHandler={onInputChangeHandler}
        value={dateTimeSeparator(stop.schedule.end).time}
      />
    </>
  );

  return (
    <div className="schedule-form__wrapper">
      <form
        className="schedule-form"
        schedule-form-id={formId}
        id={formId}
        data-testid={formId}
        onSubmit={onSubmitHandler}
      >
        <h3 className="schedule-form__title">Arrival Date</h3>

        <div className="schedule-form__input-wrapper">
          {/* Fixed: Customers can select the date for the first stop 
          when using the fixed scheduling strategy. */}
          {isFirstStop && isFixed && dateInput}

          {/* SemiFlexible: Customers can select the date and time for the
          first stop when using the semi flexible scheduling strategy. */}
          {isFirstStop && isSemiFlexible && (
            <>
              {dateInput}
              {timeInputs}
            </>
          )}

          {/* Flexible: Customers can select the date and time for all the when using 
          the flexible scheduling strategy. */}
          {isFlexible && (
            <>
              {dateInput}
              {timeInputs}
            </>
          )}
        </div>

        {canEditForm && (
          <div className="schedule-form__control">
            <Button
              type="button"
              onClick={onCancelHandler}
              text="Cancel"
              variant="tertiary"
            />

            <Button type="submit" text="Save" />
          </div>
        )}
      </form>
    </div>
  );
};
