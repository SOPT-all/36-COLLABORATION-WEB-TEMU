import { style } from '@vanilla-extract/css';

export const reviewTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const rateContainer = style({
  display: 'flex',
  padding: '3.6rem 9.2rem',
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
  padding: '0.5rem 0rem 0.5rem 4.7rem ',
});

export const scoreNPercent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const graph = style({
  margin: '0.7rem 0rem',
});
