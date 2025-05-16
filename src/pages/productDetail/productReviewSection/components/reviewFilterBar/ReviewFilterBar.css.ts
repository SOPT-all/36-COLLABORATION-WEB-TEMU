import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  padding: '1.6rem 0rem',
  gap: '84rem',
});

export const leftSide = style({
  display: 'flex',
  gap: '1.2rem',
});

export const filterButton = recipe({
  base: {
    ...vars.font.body_medium_15,
    cursor: 'pointer',
  },
  variants: {
    selected: {
      true: {
        color: vars.color.gray8,
      },
      false: {
        color: vars.color.gray5,
        fontWeight: 'normal',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const rightSide = style({
  display: 'flex',
  gap: '1rem',
});

export const selectWrapper = style({
  display: 'flex',
  gap: '0.4rem',
  padding: '0.6rem 1rem',
  alignItems: 'center',
  borderRadius: '8px',
  border: `1px solid ${vars.color.gray2}`,
});
