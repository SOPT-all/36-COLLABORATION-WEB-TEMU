import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const tableContainer = style({
  width: '108.6rem',

  ...vars.font.body_medium_16,
  color: vars.color.gray8,
});

export const thStyle = style({
  minWidth: '22rem',
  padding: '1.4rem 6rem',

  textAlign: 'center',
  verticalAlign: 'middle',

  border: `1px solid ${vars.color.gray1}`,
  backgroundColor: vars.color.gray0,
});

export const tdStyle = style({
  padding: '1.4rem 10rem',

  verticalAlign: 'middle',
  textAlign: 'center',
  whiteSpace: 'nowrap',

  border: `1px solid ${vars.color.gray1}`,
  backgroundColor: vars.color.white,
});
