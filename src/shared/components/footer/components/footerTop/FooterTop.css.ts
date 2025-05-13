import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const footerTopContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '2rem 4.5rem',

  backgroundColor: vars.color.black,
});

export const footerTopSection = style({
  display: 'flex',
  flexDirection: 'column',

  gap: '2rem',
});

export const footerToptextGap = style({
  display: 'flex',
  flexDirection: 'column',

  gap: '1.2rem',
});

export const appSectionRow = style({
  display: 'flex',
});
