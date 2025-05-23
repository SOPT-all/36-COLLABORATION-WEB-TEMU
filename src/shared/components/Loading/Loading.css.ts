import { vars } from '@shared/styles/theme.css';
import { style, keyframes } from '@vanilla-extract/css';

export const loadingContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: ' center',
  height: '80dvh',
});

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
  border: `5px solid ${vars.color.gray3}`,
  borderTop: `5px solid ${vars.color.point_orange}`,
  borderRadius: '50%',
  width: '6rem',
  height: '6rem',
  animation: `${spin} 1s linear infinite`,
});
