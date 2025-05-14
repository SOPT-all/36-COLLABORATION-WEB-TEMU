import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0.8rem 14rem',
});

export const rightWrapper = style({
  display: 'flex',
  alignItems: 'center',

  gap: '4rem',
});

export const textWrapper = style({
  display: 'flex',
  alignItems: 'center',

  gap: '1.2rem',
});
