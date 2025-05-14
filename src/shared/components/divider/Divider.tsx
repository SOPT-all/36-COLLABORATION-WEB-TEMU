import * as styles from '@shared/components/divider/Divider.css';
import type { HtmlHTMLAttributes } from 'react';

interface DividerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  color?:
    | 'gray1'
    | 'gray2'
    | 'gray3'
    | 'gray4'
    | 'gray5'
    | 'gray6'
    | 'gray7'
    | 'gray8'
    | 'gray8_30';
  length?: string | number;
  thickness?: string | number;
}

const Divider = ({
  direction = 'horizontal',
  color = 'gray1',
  length = '100%',
  thickness = '0.1rem',
}: DividerProps) => {
  const sizeStyle =
    direction === 'horizontal'
      ? { width: length, height: thickness }
      : { height: length, width: thickness };

  return <div className={styles.divider({ direction, color })} style={sizeStyle} />;
};

export default Divider;
