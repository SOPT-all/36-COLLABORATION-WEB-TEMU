import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10rem',
});

export const productTopContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  gap: '4.7rem',
  padding: '0 14rem',
});

export const productTopSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',
});

export const wrapper = style({
  width: '108.6rem',
});
