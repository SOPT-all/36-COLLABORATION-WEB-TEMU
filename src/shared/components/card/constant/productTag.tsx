import { IcRegularCustomer, IcReturnGreen, IcDay } from '@svg/index';
import type { JSX } from 'react';

export const PRODUCT_TAGS: Record<string, { text: string; icon: JSX.Element }> = {
  HIGH_REPURCHASE: {
    text: '재구매 고객이 많은 스토어',
    icon: <IcRegularCustomer height="1.6rem" width="1.6rem" />,
  },
  LOW_RETURN: {
    text: '상품 반품률이 낮은 스토어',
    icon: <IcReturnGreen height="1.6rem" width="1.6rem" />,
  },
  ESTABLISHED_YEAR_AGO: {
    text: '1년 전 설립된 판매자',
    icon: <IcDay height="1.6rem" width="1.6rem" />,
  },
  NONE: {
    text: '',
    icon: <></>,
  },
};