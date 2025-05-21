import type { ReactNode } from 'react';
import * as styles from '@shared/components/ProductActionButton/ProductActionButton.css';

interface ProductActionButtonProps {
  text: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'lg';
  radius?: 'sm' | 'md' | 'lg';
  fontSize?: 'sm' | 'lg';
  icon?: ReactNode;
  onClick?: () => void;
}

const ProductActionButton = ({
  text,
  variant = 'solid',
  size = 'lg',
  radius = 'sm',
  fontSize = 'lg',
  icon,
  onClick,
}: ProductActionButtonProps) => {
  return (
    <button
      className={`${styles.baseButton} ${styles.buttonVariant[variant]}
    ${styles.buttonContainer[size]}
    ${styles.buttonRadius[radius]}
    ${styles.buttonFontSize[fontSize]}
    `}
      type="button"
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default ProductActionButton;
