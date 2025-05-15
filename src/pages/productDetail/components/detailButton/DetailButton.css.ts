import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const detailButtonsContainer = style({
  display: 'flex',
});

export const detailButtonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '1.8rem 0',
  width: '100%',
  maxWidth: '36.2rem',

  border: `1px solid ${vars.color.gray1}`,

  backgroundColor: vars.color.gray0,
});
