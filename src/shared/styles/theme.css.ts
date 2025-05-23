import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#FFFFFF',

    black: '#121212',
    gray0: '#F6F6F6',
    gray1: '#EAEAEA',
    gray2: '#CDCDCD',
    gray3: '#BCBCBC',
    gray4: '#AAAAAA',
    gray5: '#8F8F8F',
    gray6: '#666666',
    gray7: '#434343',
    gray8: '#222222',
    gray8_30: 'rgba(34, 34, 34, 0.3)',

    point_red: '#D9001B',
    point_orange: '#FF7710',
    point_orange2: '#FEEFE1',
    point_orange3: '#e36500',
    point_green: '#0A8800',
  },

  font: {
    head_bold_60: { fontSize: '6rem', fontWeight: '600', lineHeight: '150%' },
    head_bold_28: { fontSize: '2.8rem', fontWeight: '700', lineHeight: '150%' },
    head_bold_24: { fontSize: '2.4rem', fontWeight: '700', lineHeight: '150%' },
    head_sb_24: { fontSize: '2.4rem', fontWeight: '600', lineHeight: '150%' },
    head_bold_20: { fontSize: '2rem', fontWeight: '700', lineHeight: '150%' },
    head_sb_20: { fontSize: '2rem', fontWeight: '600', lineHeight: '150%' },
    head_medium_20: { fontSize: '2rem', fontWeight: '500', lineHeight: '150%' },
    head_regular_20: { fontSize: '2rem', fontWeight: '400', lineHeight: '150%' },

    body_bold_18: { fontSize: '1.8rem', fontWeight: '700', lineHeight: '150%' },
    body_medium_18: { fontSize: '1.8rem', fontWeight: '500', lineHeight: '150%' },
    body_regular_18: { fontSize: '1.8rem', fontWeight: '400', lineHeight: '150%' },
    body_bold_16: { fontSize: '1.6rem', fontWeight: '700', lineHeight: '150%' },
    body_medium_16: { fontSize: '1.6rem', fontWeight: '500', lineHeight: '150%' },
    body_regular_16: { fontSize: '1.6rem', fontWeight: '400', lineHeight: '150%' },
    body_medium_15: { fontSize: '1.5rem', fontWeight: '500', lineHeight: '150%' },
    body_regular_15: { fontSize: '1.5rem', fontWeight: '400', lineHeight: '150%' },
    body_bold_14: { fontSize: '1.4rem', fontWeight: '700', lineHeight: '150%' },
    body_medium_14: { fontSize: '1.4rem', fontWeight: '500', lineHeight: '150%' },
    body_regular_14: { fontSize: '1.4rem', fontWeight: '400', lineHeight: '150%' },

    caption_bold_13: { fontSize: '1.3rem', fontWeight: '700', lineHeight: '150%' },
    caption_medium_13: { fontSize: '1.3rem', fontWeight: '500', lineHeight: '150%' },
    caption_regular_13: { fontSize: '1.3rem', fontWeight: '400', lineHeight: '150%' },
    caption_bold_12: { fontSize: '1.2rem', fontWeight: '700', lineHeight: '150%' },
    caption_medium_12: { fontSize: '1.2rem', fontWeight: '500', lineHeight: '150%' },
    caption_regular_12: { fontSize: '1.2rem', fontWeight: '400', lineHeight: '150%' },
  },

  zIndex: {
    category: '1',
    header: '2',
  },
});
