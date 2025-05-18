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

export const appSectionWrapper = style({
  display: 'flex',

  gap: '1.8rem',
});

export const appSectionColWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.3rem',
});

export const appSectionColTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const appSectionTextRow = style({
  display: 'flex',
  gap: '0.3rem',
});

export const dividerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  paddingTop: '0.5rem',

  gap: '1.5rem',
});

export const buttonContainer = style({
  display: 'flex',
});

export const buttonWrapper = style({
  display: 'flex',

  alignItems: 'center',
  padding: '0.8rem 1.8rem',
  gap: '0.8rem',

  borderRadius: '30px',
  border: `1px solid ${vars.color.gray6}`,
});

export const snsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const snsWrapper = style({
  display: 'flex',
  gap: '2.7rem',
});
