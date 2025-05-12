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
    width: '9.4rem',
    height: '9.2rem',
    padding: '1.6rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.4rem',
    flexShrink: 0,
    borderRadius: '0.4rem',
    background: vars.color.gray0,
    color: vars.color.gray8,
    ...vars.font.body_regular_14,
    cursor: 'pointer',
  },
  variants: {
    selected: {
      true: {
        background: vars.color.point_orange,
        color: vars.color.white,
        ...vars.font.body_bold_14,
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});
