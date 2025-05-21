import { style } from '@vanilla-extract/css';

export const homeWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
});

export const forwardTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  marginBottom: '3.6rem',
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

  width: '136.6rem',
});

export const sectionBanner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '11.4rem 0 10.5rem 0',
});

export const listTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.1rem',

  marginBottom: '4.2rem',
});

export const listWrapper = style({
  width: '108.6rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  gap: '1.9rem',
  rowGap: '3.6rem',

  marginTop: '6.3rem',
});

export const imgBanner = style({
  width: '100%',
  height: '32rem',
  marginBottom: '6.6rem',
});

export const imgMainBanner = style({
  width: '108.6rem',
  height: '22.4rem',
});

export const familyMonthTitle = style({
  width: '11.5rem',
  height: '2rem',
});

export const sectionBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  paddingTop: '11.2rem',
  paddingBottom: '18.6rem',
});