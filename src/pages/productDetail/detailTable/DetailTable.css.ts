import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const tableContainer = style({
  ...vars.font.body_medium_16,

  color: vars.color.gray8,
});

export const thStyle = style({
  padding: '1.4rem 6rem',

  textAlign: 'center',

  border: `1px solid ${vars.color.gray1}`,
  backgroundColor: vars.color.gray0,
});

export const tdStyle = style({
  padding: '1.4rem 12rem',

  textAlign: 'center',

  border: `1px solid ${vars.color.gray1}`,
  backgroundColor: vars.color.white,
});
