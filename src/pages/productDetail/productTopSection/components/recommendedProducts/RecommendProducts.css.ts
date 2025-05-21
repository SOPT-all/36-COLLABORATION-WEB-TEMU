import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',

  gap: '4rem',
  width: '100%',

  paddingTop: '4.4rem',
  paddingBottom: '8rem',
});

export const productListContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  gap: '2.9rem',
});
