import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  height: '60vh',
  padding: '0 1rem',
});

export const button = style({
  width: '10rem',
  padding: '0.6rem 1.5rem',
  textAlign: 'center',

  cursor: 'pointer',
  borderRadius: '8px',

  backgroundColor: vars.color.point_orange,
  color: '#fff',

  selectors: {
    '&:hover': {
      backgroundColor: vars.color.point_orange3,
    },
  },

  ...vars.font.body_medium_14,
});

export const buttonWrapper = style({
  display: 'flex',
  gap: '1rem',
});
