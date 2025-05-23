import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const tagWrapper = style({
  width: '108.6rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
});

export const tag = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.4rem',

    width: '9.4rem',
    minHeight: '9.2rem',
    padding: '1.6rem',
    borderRadius: '4px',

    background: vars.color.gray0,

    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  variants: {
    selected: {
      true: {
        background: vars.color.point_orange,
        color: vars.color.white,
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});
