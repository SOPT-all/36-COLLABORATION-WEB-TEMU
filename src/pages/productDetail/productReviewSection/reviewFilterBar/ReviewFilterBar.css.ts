import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  padding: '1.6rem 0rem',
  gap: '84rem',
});

export const leftSide = style({
  display: 'flex',
  gap: '1.2rem',
});

export const active = style({
  color: vars.color.gray8,
});

export const inactive = style({
  color: vars.color.gray5,
});

export const rightSide = style({
  display: 'flex',
  gap: '1rem',
});

export const selectWrapper = style({
  display: 'flex',
  position: 'relative',
  gap: '0.4rem',
  padding: '0.6rem 1rem',
  alignItems: 'center',
  borderRadius: '0.8rem',
  border: `1px solid ${vars.color.gray2}`,
});
