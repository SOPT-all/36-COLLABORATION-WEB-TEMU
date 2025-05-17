import { style } from '@vanilla-extract/css';

export const galleryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.8rem',
});

export const galleryItem = style({
  display: 'flex',
  gap: '1.2rem',

  justifyContent: 'center',
  alignItems: 'center',
});

export const galleryItemButton = style({
  border: '1px solid transparent',
});

export const galleryItemSelected = style({
  borderColor: 'black',
});
