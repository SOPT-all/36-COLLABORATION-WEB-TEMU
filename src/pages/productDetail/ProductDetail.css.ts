import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  padding: '6.6rem 14rem 16.1rem 14rem',
});

export const detailWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  variants: {
    gap: {
      none: { gap: 0 },
      s: { gap: '3rem' },
      m: { gap: '6.4rem' },
      l: { gap: '6.6rem' },
      xl: { gap: '6.8rem' },
    },
  },

  defaultVariants: {
    gap: 'none',
  },
});

export const contentContainer = recipe({
  base: {
    width: '100%',
    position: 'relative',
  },
  variants: {
    expanded: {
      true: {
        maxHeight: 'none',
        overflow: 'visible',
      },
      false: {
        maxHeight: '150rem',
        overflow: 'hidden',
      },
    },
  },
  defaultVariants: {
    expanded: false,
  },
});

export const moreButtonWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  zIndex: vars.zIndex.category,
});

export const reviewWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});
