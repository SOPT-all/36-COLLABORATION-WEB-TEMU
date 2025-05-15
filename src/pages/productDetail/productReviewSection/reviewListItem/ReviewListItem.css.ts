import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  padding: '3.2rem 0rem',
  gap: '11.2rem',
});

export const leftWrapper = style({
  display: 'flex',
  gap: '3.2rem',
  width: '74.4rem',
  alignContent: 'space-between',
});

export const leftItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const rightItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.1rem',
});

export const textSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
