import type { ComponentType, SVGProps } from 'react';
import IcStar1 from '@svg/ic_star_1_sm.svg?react';
import IcStar1_5 from '@svg/ic_star_1_5_sm.svg?react';
import IcStar2 from '@svg/ic_star_2_sm.svg?react';
import IcStar2_5 from '@svg/ic_star_2_5_sm.svg?react';
import IcStar3 from '@svg/ic_star_3_sm.svg?react';
import IcStar3_5 from '@svg/ic_star_3_5_sm.svg?react';
import IcStar4 from '@svg/ic_star_4_sm.svg?react';
import IcStar4_5 from '@svg/ic_star_4_5_sm.svg?react';
import IcStar5 from '@svg/ic_star_5_sm.svg?react';

export const starIconMap: Record<number, ComponentType<SVGProps<SVGSVGElement>>> = {
  1: IcStar1,
  1.5: IcStar1_5,
  2: IcStar2,
  2.5: IcStar2_5,
  3: IcStar3,
  3.5: IcStar3_5,
  4: IcStar4,
  4.5: IcStar4_5,
  5: IcStar5,
};

export type StarScore = keyof typeof starIconMap;
export type StarIconComponent = (typeof starIconMap)[StarScore];
