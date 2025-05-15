import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',

  width: '108.6rem',
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',

  height: '4rem',
  padding: '0rem 1.2rem',
});

export const currentCategoryContainer = style({
  display: 'flex',
  flex: 1,

  backgroundColor: vars.color.gray0,
});

export const currentCategoryWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2.3rem 3.3rem',

  height: '32rem',

  gap: '1.6rem',
});

export const currentCategoryTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});
