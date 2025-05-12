import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const baseButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const buttonVariant = styleVariants({
  solid: {
    backgroundColor: vars.color.point_orange,
    color: vars.color.white,
  },
  outline: {
    border: `1px solid ${vars.color.point_orange}`,
    backgroundColor: vars.color.white,
    color: vars.color.point_orange,
  },
});

export const buttonContainer = styleVariants({
  sm: {
    display: 'inline-flex',

    width: '22.4rem',
    padding: '1.2rem 5rem',
    gap: '0.3rem',

    whiteSpace: 'nowrap',
  },
  lg: {
    display: 'flex',
    flexDirection: 'column',

    width: '23.7rem',
    padding: '1rem 8rem',
    gap: '0.8rem',
  },
});

export const buttonRadius = styleVariants({
  sm: { borderRadius: '0.4rem' },
  md: { borderRadius: '0.8rem' },
  lg: { borderRadius: '3rem' },
});

export const buttonFontSize = styleVariants({
  sm: {
    ...vars.font.body_bold_16,
  },
  lg: {
    ...vars.font.body_bold_18,
    textAlign: 'center',
  },
});

export const icon = style({
  width: '1.6rem',
  height: '1.6rem',
});
