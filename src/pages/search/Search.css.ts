import { style } from '@vanilla-extract/css';

export const container = style ({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',

  width: '108.8rem',
  margin: '0 auto',
});

export const listWrapper = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  gap: '7.9rem 1.9rem',
});

export const buttonWrapper = style({
  margin: '8rem 0 18.8rem 0',

  textAlign: 'center',
})