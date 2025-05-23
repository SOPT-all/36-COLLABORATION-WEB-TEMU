import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const dividerContainer = style({
  width: '100%',
  borderBottom: `1px solid ${vars.color.gray1}`,

  backgroundColor: vars.color.white,
});

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '0.8rem 14rem',
});

export const leftWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '10.5rem',
});

export const rightWrapper = style({
  display: 'flex',
  alignItems: 'center',

  gap: '4rem',
});

export const textWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.2rem',
});

export const categoryWrapper = style({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '108.6rem',
  padding: '0.7rem 0rem',
});

export const categoryMenuWrapper = style({
  position: 'absolute',
  top: '100%',
  left: 0,

  width: '100%',

  zIndex: vars.zIndex.category,
});

export const navStyle = style({
  cursor: 'pointer',
});
