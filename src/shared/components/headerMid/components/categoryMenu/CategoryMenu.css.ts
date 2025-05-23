import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',

  width: '100%',
  height: '35.5rem',

  zIndex: vars.zIndex.category,
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  backgroundColor: vars.color.white,
});

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',

  width: '18.4rem',
  height: '4rem',
  padding: '0rem 1.2rem',

  backgroundColor: vars.color.white,

  ':hover': {
    backgroundColor: vars.color.point_orange,
  },

  cursor: 'pointer',
});

export const selectedTitle = style({
  backgroundColor: vars.color.point_orange,
  color: vars.color.white,
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

  width: '100%',
  maxWidth: '18.4rem',

  gap: '1.6rem',
});

export const currentCategoryTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',

  cursor: 'pointer',
});

export const currentCategoryTextStyle = style({
  color: vars.color.gray6,

  ':hover': {
    color: vars.color.point_orange,
  },
});

export const titleRowSelected = style({
  backgroundColor: vars.color.point_orange,
});
