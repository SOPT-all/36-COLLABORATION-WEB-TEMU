import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const galleryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.8rem',
  width: '55.2rem',
});

export const galleryItem = style({
  display: 'flex',
  gap: '1.2rem',

  justifyContent: 'center',
  alignItems: 'center',
});

export const galleryImage = recipe({
  base: {
    border: '1px solid transparent',
  },
  variants: {
    selected: {
      true: {
        borderColor: 'black',
        transition: 'border-color 0.3s ease-in-out',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const image = style({
  display: 'block',
});
