import { recipe } from '@vanilla-extract/recipes';

// 카드 전체 wrapper 스타일
export const cardWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: '0.5rem',
    border: '1px solid var(--2-grayscale-gray1, #EAEAEA)',
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
  },
  variants: {
    size: {
      l: { width: '12.125rem' },
      xl: { width: '21.9rem' },
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
      xl: { height: '10.875rem' },
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
    background: 'var(--2-white, #FFF)',
    padding: '0.5rem',
    borderRadius: '0rem 0rem 0.5rem 0.5rem',
  },
  variants: {
    size: {
      l: { gap: '1.25rem' },
      xl: { gap: '0.4375rem' },
    },
  },
  defaultVariants: {
    size: 'l',
  },
});

// 타이틀 텍스트
export const cardTitle = recipe({
  base: {
    color: 'var(--2-grayscale-gray8, #222)',
    fontWeight: '400',
    lineHeight: '150%',
  },
});

// 가격/장바구니 라인
export const cardRow = recipe({
  base: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

// 가격 영역
export const priceWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '0.25rem',
  },
});

export const cardDiscount = recipe({
  base: {
    color: 'var(--2-point-point_orange, #FF7710)',
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '150%',
  },
});

export const cardPrice = recipe({
  base: {
    color: 'var(--2-black, #121212)',
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '150%',
  },
});
