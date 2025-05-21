import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '3.2rem 0rem',
});

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const leftWrapper = style({
  display: 'flex',
  gap: '3.2rem',
  width: '74.4rem',
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
