import type { ComponentType, SVGProps } from 'react';

export type CategoryId =
  | ''
  | 'fashion'
  | 'baby'
  | 'life'
  | 'kitchen'
  | 'digital'
  | 'sports'
  | 'car'
  | 'book';

export interface CategoryTitleTypes {
  id: CategoryId;
  iconBlack: ComponentType<SVGProps<SVGSVGElement>>;
  iconWhite: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
}
