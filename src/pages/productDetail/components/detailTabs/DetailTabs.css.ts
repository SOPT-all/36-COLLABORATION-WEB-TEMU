import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const detailTabsContainer = style({
  display: 'flex',
  width: '108.6rem',
});

export const detailTabsWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '1.8rem 0',
    width: '100%',

    border: `1px solid ${vars.color.gray1}`,
    ...vars.font.body_medium_18,
  },
  variants: {
    isClicked: {
      true: {
        backgroundColor: vars.color.white,
        color: vars.color.point_orange,
      },
      false: {
        backgroundColor: vars.color.gray0,
        color: vars.color.gray8,
      },
    },
  },
  defaultVariants: {
    isClicked: false,
  },
});
