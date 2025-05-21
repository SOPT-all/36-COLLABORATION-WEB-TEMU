import { style } from '@vanilla-extract/css';

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
