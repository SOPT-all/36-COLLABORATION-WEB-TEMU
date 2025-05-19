import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const bestSeller = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.2rem 0.6rem',

  backgroundColor: vars.color.point_green,
  color: vars.color.white,
  ...vars.font.caption_medium_12,
  borderRadius: '4px',
});
