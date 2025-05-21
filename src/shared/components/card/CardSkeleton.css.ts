import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';
import { style, keyframes } from '@vanilla-extract/css';

export const shimmer = keyframes({
  '0%': { backgroundPosition: '-200px 0' },
  '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
});

export const shimmerEffect = style({
  backgroundColor: vars.color.gray1,
  backgroundImage:
    'linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.6) 40px, transparent 80px)',
  backgroundSize: '200px 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0 0',
  animation: `${shimmer} 1.2s infinite linear`,
});

export const shimmerImgEffect = style({
  backgroundColor: vars.color.gray2,
  backgroundImage:
    'linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.6) 40px, transparent 80px)',
  backgroundSize: '200px 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0 0',
  animation: `${shimmer} 1.2s infinite linear`,
});

export const cardWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: '0.8rem',
    border: `1px solid ${vars.color.gray1}`,
  },
  variants: {
    size: {
      l: { width: '19.4rem' },
      xl: { width: '35rem' },
    },
  },
  defaultVariants: {
    size: 'l',
  },
});

export const cardImg = recipe({
  base: {
    width: '100%',
    borderRadius: '0.8rem 0.8rem 0 0',
  },
  variants: {
    size: {
      l: { height: '16.4rem' },
      xl: { height: '17.4rem' },
    },
  },
  defaultVariants: {
    size: 'l',
  },
});

export const cardDescription = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '100%',
    padding: '0.8rem',
    borderRadius: '0 0 0.8rem 0.8rem',
    background: vars.color.white,
  },
  variants: {
    size: {
      l: { gap: '2rem' },
      xl: { gap: '0.7rem' },
    },
  },
  defaultVariants: {
    size: 'l',
  },
});

export const cardTitle = style({
  width: '100%',
  height: '1.5rem',
  borderRadius: '0.2rem',
});

export const cardPriceRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
  width: '100%',
});

export const priceWrapper = style({
  width: '11.3rem',
  height: '1.5rem',
  borderRadius: '0.2rem',
});

export const cartButton = style({
  width: '3.6rem',
  height: '2.4rem',
  borderRadius: '1.8rem',
});

export const cardReviewRow = style({
  borderRadius: '0.2rem',
});

export const cardProductTageRow = style({
  width: '17.3rem',
  height: '1.5rem',
  borderRadius: '0.2rem',
});
