import { style } from '@vanilla-extract/css';

export const homeWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10rem',
});

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',

  width: '100%',
});

export const forwardTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  margin: '6.6rem 0',
});

export const forwardTitle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.2rem',

  height: '3.6rem',
});

export const forwardListWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.9rem',
  flexWrap: 'nowrap',

  width: '136.6rem',
});

export const listTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.1rem',
});

export const listWrapper = style({
  width: '108.6rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  gap: '1.9rem',
});

export const imgMainBanner = style({
  width: '108.6rem',
  height: '22.4rem',
});

export const familyMonthTitle = style({
  width: '11.5rem',
  height: '2rem',
});
