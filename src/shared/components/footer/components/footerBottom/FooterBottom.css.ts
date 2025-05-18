import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2.6rem 1rem',
  gap: '1.1rem',

  backgroundColor: vars.color.black,
});

export const leftTitlesWrapper = style({
  display: 'flex',
});

export const titlesWrapper = style({
  display: 'flex',
  gap: '2rem',
});

export const underline = style({
  textDecoration: 'underline',
});

export const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});
