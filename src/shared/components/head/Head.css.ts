import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const headStyle = recipe({
  variants: {
    tag: {
      head_bold_60: vars.font.head_bold_60,
      head_bold_28: vars.font.head_bold_28,
      head_bold_24: vars.font.head_bold_24,
      head_sb_24: vars.font.head_sb_24,
      head_bold_20: vars.font.head_bold_20,
      head_sb_20: vars.font.head_sb_20,
      head_medium_20: vars.font.head_medium_20,
      head_regular_20: vars.font.head_regular_20,
    },
    color: {
      white: { color: vars.color.white },
      black: { color: vars.color.black },
      gray1: { color: vars.color.gray1 },
      gray2: { color: vars.color.gray2 },
      gray3: { color: vars.color.gray3 },
      gray4: { color: vars.color.gray4 },
      gray5: { color: vars.color.gray5 },
      gray6: { color: vars.color.gray6 },
      gray7: { color: vars.color.gray7 },
      gray8: { color: vars.color.gray8 },
      gray8_30: { color: vars.color.gray8_30 },
      point_red: { color: vars.color.point_red },
      point_orange: { color: vars.color.point_orange },
      point_orange2: { color: vars.color.point_orange2 },
      point_green: { color: vars.color.point_green },
    },
  },
});
