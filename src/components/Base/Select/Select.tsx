import './Select.scss';

type SelectProps = {
  id: string;
  label?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
};

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  onChangeHandler,
  children,
}) => {
  return (
    <div className="select">
      {label && (
        <label className="select__label" htmlFor={id}>
          {label}
        </label>
      )}

      <select
        className="select__select"
        id={id}
        name="type"
        onChangeCapture={onChangeHandler}
      >
        {children}
      </select>
    </div>
  );
};
