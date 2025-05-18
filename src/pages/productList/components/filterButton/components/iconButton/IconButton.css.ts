import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',

  padding: '1rem 1.6rem',
  border: 'none',
  borderRadius: '30px',

  backgroundColor: vars.color.gray0,

  ...vars.font.body_medium_15,
  color: vars.color.gray5,

  cursor: 'pointer',
});
