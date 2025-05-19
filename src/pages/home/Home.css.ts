import { style } from '@vanilla-extract/css';

export const homeWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '3rem',
});
export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '2rem',
});
export const sectionTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  margin: '2rem 0',
});
export const title = style({
  display: 'flex',
  height: '3.6rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.2rem',
});

export const specialListWrapper = style({
  width: '108.6rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.9rem',
  flexWrap: 'nowrap',
});
export const listWrapper = style({
  width: '108.6rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  gap: '1.9rem',
});
export const placeholderL = style({
  width: '19.4rem',
  height: '17rem',
  background: 'black',
});

export const placeholderXL = style({
  width: '35rem',
  height: '20rem',
  background: 'black',
});
