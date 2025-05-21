import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const reviewTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const rateContainer = style({
  display: 'flex',
  padding: '3.6rem 9.2rem',
  justifyContent: 'center',
  gap: '4.7rem',
});

export const rateContainerLeft = style({
  display: 'flex',
  gap: '6.6rem',
  alignItems: 'center',
  justifyContent: 'center',
});

export const reviewAverage = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  textAlign: 'center',
});

export const rateContainerRight = style({
  display: 'flex',
  gap: '3.2rem',
  alignItems: 'center',
});

export const scoreNPercent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  whiteSpace: 'nowrap',
});

export const graphWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  width: '49.1rem',
});

export const barBackground = style({
  width: '100%',
  height: '1.3rem',
  backgroundColor: vars.color.gray1,
  borderRadius: '2rem',
});

export const barFill = recipe({
  base: {
    height: '100%',
    backgroundColor: vars.color.gray7,
    borderRadius: '6.5px',
  },
  variants: {
    isZero: {
      true: {
        width: '1.4rem',
      },
      false: {
        width: 'auto',
      },
    },
  },
  defaultVariants: {
    isZero: false,
  },
});
