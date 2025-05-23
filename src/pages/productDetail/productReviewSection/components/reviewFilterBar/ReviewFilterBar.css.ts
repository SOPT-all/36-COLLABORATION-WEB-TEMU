import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  padding: '1.6rem 0rem',
  justifyContent: 'space-between',
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

export const dropdownWrapper = style({
  position: 'relative',
  display: 'inline-block',
  width: '6.5rem',
});

export const dropdownSelect = style({
  width: '100%',
  padding: '0.6rem 2rem 0.6rem 1rem',
  border: `1px solid ${vars.color.gray2}`,
  borderRadius: '8px',
  color: vars.color.gray7,
  ...vars.font.body_regular_14,
  cursor: 'pointer',
});

export const dropdownIcon = style({
  position: 'absolute',
  top: '50%',
  right: '1rem',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
});
