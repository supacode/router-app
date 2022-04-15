import cn from 'classnames';
import './Button.scss';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  type?: 'button' | 'submit';
  text: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  variant,
  type,
  className,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn('button', {
        [`button__${variant}`]: variant,
        [`${className}`]: className,
      })}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary',
};
