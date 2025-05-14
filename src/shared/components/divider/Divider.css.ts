import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const divider = recipe({
  base: {
    display: 'block',
  },
  variants: {
    direction: {
      horizontal: {
        width: '100%',
        height: '0.1rem',
      },
      vertical: {
        width: '0.1rem',
        height: '100%',
      },
    },
    color: {
      gray1: { backgroundColor: vars.color.gray1 },
      gray2: { backgroundColor: vars.color.gray2 },
      gray3: { backgroundColor: vars.color.gray3 },
      gray4: { backgroundColor: vars.color.gray4 },
      gray5: { backgroundColor: vars.color.gray5 },
      gray6: { backgroundColor: vars.color.gray6 },
      gray7: { backgroundColor: vars.color.gray7 },
      gray8: { backgroundColor: vars.color.gray8 },
      gray8_30: { backgroundColor: vars.color.gray8_30 },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
});
