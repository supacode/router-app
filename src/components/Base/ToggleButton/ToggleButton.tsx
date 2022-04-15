import { MinusIcon } from '../../../assets/icons/MinusIcon/MinusIcon';
import { PlusIcon } from '../../../assets/icons/PlusIcon/PlusIcon';
import { Button } from '../Button';
import './ToggleButton.scss';

type ToggleButtonProps = {
  onClick?: () => void;
  text: React.ReactNode;
  isActive?: boolean;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  text,
  isActive,
}) => {
  const onClickHandler = () => {
    onClick && onClick();
  };

  return (
    <div className="toggle-button">
      <span className="toggle-button__icon">
        {isActive ? <PlusIcon /> : <MinusIcon />}
      </span>

      <Button
        onClick={onClickHandler}
        className="toggle-button__btn"
        text={text}
      />
    </div>
  );
};
