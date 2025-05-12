import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';

// 카드 전체 wrapper 스타일
export const cardWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: '0.5rem',
    border: `1px solid ${vars.color.gray1}`,
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
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
      l: { height: '10.25rem' },
      xl: { height: '17.4rem' },
    },
  },
  defaultVariants: {
    size: 'l',
  },
});

// 카드 설명 영역
export const cardDesc = recipe({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    background: vars.color.white,
    padding: '0.8rem',
    borderRadius: '0rem 0rem 0.8rem 0.8rem',
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
export const cardTitle = recipe({
  base: {
    color: vars.color.gray8,
    ...vars.font.caption_regular_13,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

// 가격/장바구니 라인
export const cardRow = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'stretch',
    gap: '0.6rem',
  },
});

// 가격 영역
export const priceWrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
});

export const cardDiscount = recipe({
  base: {
    ...vars.font.body_bold_16,
    color: vars.color.point_orange,
  },
});

export const cardPrice = recipe({
  base: {
    ...vars.font.body_bold_16,
    color: vars.color.black,
  },
});
export const reviewRow = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
});
export const review = recipe({
  base: {
    ...vars.font.caption_regular_13,
  },
});
