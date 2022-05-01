import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';
import { Select } from 'components/ui/Select/Select';
import './AddCargoForm.scss';

type AddCargoFormProps = {
  onCancel: () => void;
};

export const AddCargoForm: React.FC<AddCargoFormProps> = ({ onCancel }) => {
  const onSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    // Out of scope
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
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
          type="button"
          onClick={onCancel}
          text="Cancel"
        />

        <Button
          variant="primary"
          type="submit"
          text="Save"
          className="form__btn form__cta"
        />
      </div>
    </form>
  );
};
