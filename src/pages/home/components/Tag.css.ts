import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const tagWrapper = style({
  width: '108.6rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
});

export const tag = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',
  flexShrink: 0,

  width: '9.4rem',
  height: '9.2rem',
  padding: '1.6rem',
  borderRadius: '0.4rem',

  background: vars.color.gray0,
  color: vars.color.gray8,

  cursor: 'pointer',
});
