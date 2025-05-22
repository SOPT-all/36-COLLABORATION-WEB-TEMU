import { style } from '@vanilla-extract/css';

export const container = style ({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',

  width: '108.8rem',
  margin: '3.2rem auto 0 auto',
});

export const containerWithExtraMargin = style([
  container,
  {
    marginBottom: '37.4rem',
  },
]);

export const listWrapper = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, auto))',
  justifyContent: 'flex-start',
  gap: '3.6rem 1.9rem',
});

export const buttonWrapper = style({
  padding: '8rem 0 18.8rem 0',

  textAlign: 'center',
})

export const messageWrapper = style({
  paddingBottom: '26rem',
})