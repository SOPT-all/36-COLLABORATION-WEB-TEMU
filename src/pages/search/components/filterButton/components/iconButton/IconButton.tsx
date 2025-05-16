import type { ButtonHTMLAttributes, ReactNode } from 'react';
import * as styles from '@pages/search/components/filterButton/components/iconButton/IconButton.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const IconButton = ({
  text,
  icon,
  iconPosition = 'right',
  ...props
}: IconButtonProps) => {
  return (
    <button type='button'
      className={styles.button}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      <span>{text}</span>
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default IconButton;
