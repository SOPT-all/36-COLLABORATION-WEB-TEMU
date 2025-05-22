import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '48.7rem',
});

export const summarySection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const titleRow = style({
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'flex-start',
});

export const category = style({
  display: 'flex',
  gap: '0.8rem',
});

export const smallCategory = style({
  display: 'flex',

  gap: '0.2rem',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',
});

export const discount = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.1rem',
});

export const discountNumber = style({
  display: 'flex',
  gap: '1.1rem',
});

export const benefit = style({
  display: 'flex',
  gap: '26.7rem',
  padding: '1.1rem 1.6rem',
  backgroundColor: vars.color.point_orange2,
  borderRadius: '0.4rem',
  marginBottom: '2.8rem',
});

export const benefitLeft = style({
  display: 'flex',
  gap: '1.2rem',
});

export const productActionSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const productActionSectionUp = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const productPost = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.8rem',
  gap: '1.2rem',
});

export const productPostUp = style({
  display: 'flex',
  gap: '2rem',
});

export const productPostDown = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  marginLeft: '4rem',
});

export const productFree = style({
  display: 'flex',
  gap: '2rem',
});

export const productShopping = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '44.9rem',
});

export const productShoppingUp = style({
  display: 'flex',
  gap: '2rem',
});

export const productShoppingList = style({
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
  justifyContent: 'center',
});

export const dot = style({
  color: 'black',
  fontSize: '2.6rem',
  marginLeft: '1.0rem',
});

export const productActionSectionDown = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
  margin: '3.2rem 0',
});

export const productColor = style({
  display: 'flex',
  gap: '4.5rem',
});

export const productQuantity = style({
  display: 'flex',
  gap: '4.5rem',
});

export const productStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const wrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const select = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',

  width: '41.4rem',
  padding: '0.8rem 1.6rem 0.8rem 2.4rem',
  borderRadius: '8px',
  border: `1px solid ${vars.color.gray2}`,

  ...vars.font.body_medium_16,
  color: vars.color.gray6,

  cursor: 'pointer',
});

export const icon = style({
  position: 'absolute',
  right: '1rem',
  pointerEvents: 'none',
});

export const total = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '0.9rem',
  marginTop: '3.6rem',
});

export const button = style({
  display: 'flex',
  gap: '1.3rem',
  marginTop: '2rem',
});
