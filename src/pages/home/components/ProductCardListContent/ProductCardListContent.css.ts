import { style } from '@vanilla-extract/css';

export const listWrapper = style({
  width: '108.6rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, auto))',
  gap: '1.9rem',
  rowGap: '3.6rem',
  justifyContent: 'flex-start',

  marginTop: '6.3rem',
  paddingBottom: '11.2rem',
});

export const sectionBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  paddingBottom: '18.6rem',
});
