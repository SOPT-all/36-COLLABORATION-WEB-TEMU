import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  padding: '3rem 4.5rem',
  alignItems: 'center',
  gap: '24rem',

  backgroundColor: vars.color.black,
});

export const sectionLeft = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12rem',
});

export const sectionRight = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8rem',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9rem',
});

export const bottomWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const row = style({
  display: 'flex',
  alignItems: 'center',
});

export const underline = style({
  textDecoration: 'underline',
  textDecorationColor: vars.color.white,
});

export const flexRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
});
