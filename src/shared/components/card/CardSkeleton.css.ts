import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

// 카드 전체 wrapper 스타일
export const cardWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    borderRadius: '0.8rem',
    border: `1px solid ${vars.color.gray1}`,
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
    width: '100%',
    borderRadius: '0.8rem 0.8rem 0 0',
    background: vars.color.gray2,
  },
  variants: {
    size: {
      l: { height: '16.4rem' },
      xl: { height: '17.4rem' },
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
    borderRadius: '0 0 0.8rem 0.8rem',

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
  width: '100%',
  height: '1.5rem',
  borderRadius: '0.2rem',
  background: vars.color.gray1,
});

// 가격/장바구니 라인
export const cardPriceRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',

  width: '100%',
});

// 가격 영역
export const priceWrapper = style({
  width: '11.3rem',
  height: '1.5rem',
  borderRadius: '0.2rem',
  background: vars.color.gray1,
});

export const cartButton = style({
  width: '3.6rem',
  height: '2.4rem',

  borderRadius: '1.8rem',
  background: vars.color.gray1,
});

export const cardReviewRow = style({
  borderRadius: '0.2rem',
  background: vars.color.gray1,
});

export const cardProductTageRow = style({
  width: '17.3rem',
  height: '1.5rem',
  borderRadius: '0.2rem',
  background: vars.color.gray1,
});
