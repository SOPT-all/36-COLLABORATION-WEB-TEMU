import type { ComponentType, SVGProps } from 'react';
import {
  IcStar1Sm,
  IcStar15Sm,
  IcStar2Sm,
  IcStar25Sm,
  IcStar3Sm,
  IcStar35Sm,
  IcStar4Sm,
  IcStar45Sm,
  IcStar5Sm,
} from '@svg/index';

export const starIconMap: Record<number, ComponentType<SVGProps<SVGSVGElement>>> = {
  1: IcStar1Sm,
  1.5: IcStar15Sm,
  2: IcStar2Sm,
  2.5: IcStar25Sm,
  3: IcStar3Sm,
  3.5: IcStar35Sm,
  4: IcStar4Sm,
  4.5: IcStar45Sm,
  5: IcStar5Sm,
};

export type StarScore = keyof typeof starIconMap;
export type StarIconComponent = (typeof starIconMap)[StarScore];
