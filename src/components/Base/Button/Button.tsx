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
  return <></>;
};

Button.defaultProps = {
  variant: 'primary',
};
