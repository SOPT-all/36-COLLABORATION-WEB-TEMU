import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4.8rem 14rem 0.6rem 14rem',
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

export const logowrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const inputWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 1.2rem',

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
