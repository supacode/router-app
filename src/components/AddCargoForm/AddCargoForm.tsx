import { useCallback } from 'react';
import { Button } from '../Base/Button';
import { Input } from '../Base/Input';
import { Select } from '../Base/Select/Select';
import './AddCargoForm.scss';

type AddCargoFormProps = {
  cancelHandler?: () => void;
};

export const AddCargoForm: React.FC<AddCargoFormProps> = ({
  cancelHandler,
}) => {
  const cancelHandlerCallback = useCallback(() => {
    cancelHandler && cancelHandler();
  }, [cancelHandler]);

  const onSubmitHandler = useCallback(
    (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      // Out of scope
    },
    [],
  );

  return (
    <form className="form" onSubmit={(e) => onSubmitHandler}>
      <legend className="form__title">Cargo Item</legend>

      <div className="form__form-group form__form-group--first-row">
        <Select id="type" label="Type">
          <option value="">Please select an option</option>
        </Select>

        <Select id="uploading-state" label="Uploading Stop">
          <option value="">Please select an option</option>
        </Select>

        <Input label="PO number" type="text" id="po-number" />
      </div>

      <div className="form__form-group form__form-group--second-row">
        <Input type="text" label="Quantity" id="quantity" />

        <Input type="text" label="Total weight" append="kg" id="total-weight" />

        <div className="form__separator" />

        <Input type="text" label="Length" append="cm" id="length" />

        <Input type="text" label="Width" append="cm" id="width" />

        <Input type="text" label="Height" append="cm" id="height" />
      </div>

      <div className="form__form-control">
        <Button
          variant="tertiary"
          className="form__btn"
          text="Cancel"
          onClick={cancelHandlerCallback}
        />

        <Button
          variant="primary"
          text="Save"
          className="form__btn form__cta"
          onClick={cancelHandlerCallback}
        />
      </div>
    </form>
  );
};
