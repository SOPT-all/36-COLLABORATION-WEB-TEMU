import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

// 카드 전체 wrapper 스타일
export const cardWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    borderRadius: '0.5rem',
    selectors: {
      '&:hover': {
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
      },
    },

    cursor: 'pointer',
  },
  variants: {
    size: {
      l: { width: '19.4rem' },
      xl: { width: '35rem' },
    },
  },
  defaultVariants: {
    size: 'l',
  },
});

// 카드 이미지 스타일
export const cardImg = recipe({
  base: {
    alignSelf: 'stretch',
    borderRadius: '0.5rem 0.5rem 0 0',

    objectFit: 'cover',
  },
  variants: {
    size: {
      l: { width: '19.4rem', height: '16.4rem' },
      xl: { width: '35rem', height: '17.4rem' },
    },
  },
  defaultVariants: {
    size: 'l',
  },
});

// 카드 설명 영역
export const cardDescription = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',

    width: '100%',
    padding: '0.8rem',
    borderRadius: '0rem 0rem 0.8rem 0.8rem',

    background: vars.color.white,
  },
  variants: {
    size: {
      l: { gap: '2rem' },
      xl: { gap: '0.7rem' },
    },
  },
  defaultVariants: {
    size: 'l',
  },
});

// 타이틀 텍스트
export const cardTitle = style({
  color: vars.color.gray8,
  ...vars.font.caption_regular_13,

  display: '-webkit-box',
  // 줄 수 제한
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

// 가격/장바구니 라인
export const cardPriceRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
  gap: '0.6rem',

  width: '100%',
});

// 가격 영역
export const priceWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const cardDiscount = style({
  color: vars.color.point_orange,
  ...vars.font.body_bold_16,
});

export const cardPrice = style({
  color: vars.color.black,
  ...vars.font.body_bold_16,
});

export const cartButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  width: '3.6rem',
  height: '2.4rem',
  padding: '0rem 0.8rem 0rem 0.5rem',
  borderRadius: '1.8rem',
  border: `1px solid ${vars.color.gray6}`,

  background: vars.color.white,

  selectors: {
    '&:hover': {
      border: `1px solid ${vars.color.point_orange}`,
      color: vars.color.point_orange,
    },
  },
});

export const cardReviewRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const review = style({
  ...vars.font.caption_regular_13,
});

export const cardProductTageRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',

  ...vars.font.body_regular_14,
});
