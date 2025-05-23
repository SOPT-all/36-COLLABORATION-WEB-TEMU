import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const dividerContainer = style({
  position: 'fixed',
  top: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

  backgroundColor: vars.color.white,

  zIndex: vars.zIndex.header,
});

export const container = style({
  padding: '4.8rem 14rem 0.6rem 14rem',

  transition: 'padding 0.3s ease-in-out',
});

export const scrolled = style({
  padding: '0.3rem 14rem',
});

export const headerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '108.6rem',
});

export const leftWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.8rem',
});

export const rightWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.4rem',
});

export const rightLogo = style({
  cursor: 'pointer',
});

export const logowrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',

  cursor: 'pointer',
});

export const inputWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 1.2rem 1rem 2.4rem',

  borderRadius: '30px',
  border: `1.5px solid ${vars.color.point_orange}`,
});

export const input = style({
  width: '41.8rem',
  ...vars.font.body_medium_16,

  selectors: {
    '&::placeholder': {
      color: vars.color.gray4,
    },
  },
});
