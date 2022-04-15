import React from 'react';
import cn from 'classnames';
import './Input.scss';

type InputProps = {
  id: string;
  label?: string;
  className?: string;
  name?: string;
  min?: string | number;
  max?: string | number;
  type: 'date' | 'time' | 'text' | 'number'; // will add more types on use-case later;
  required?: boolean;
  value?: string | number;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBase: React.FC<InputProps> = ({
  id,
  label,
  type,
  max,
  className,
  min,
  value,
  required,
  name,
  prepend,
  append,
  onChangeHandler,
}) => {
  return (
    <div
      className={cn('input', {
        [`${className}`]: className,
      })}
    >
      {label && (
        <label htmlFor={id} className="input__label">
          {label}
        </label>
      )}

      <div className="input__input-wrapper">
        {prepend && (
          <label htmlFor={id} className="input__prepend">
            {prepend}
          </label>
        )}

        <input
          id={id}
          max={max}
          required={required}
          defaultValue={value}
          name={name}
          onChange={onChangeHandler}
          min={min}
          type={type}
          className={'input__input'}
        />
        {append && (
          <label htmlFor={id} className="input__append">
            {append}
          </label>
        )}
      </div>
    </div>
  );
};

const memoized = React.memo(InputBase);

export { memoized as Input };
