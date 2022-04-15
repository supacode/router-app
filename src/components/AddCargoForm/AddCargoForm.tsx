import './AddCargoForm.scss';

type AddCargoFormProps = {
  cancelHandler?: () => void;
};

export const AddCargoForm: React.FC<AddCargoFormProps> = ({
  cancelHandler,
}) => {
  return <p>Add Cargo Form</p>;
};
