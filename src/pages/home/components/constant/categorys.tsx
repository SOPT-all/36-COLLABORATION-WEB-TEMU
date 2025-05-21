export const Category = {
  RECOMMEND: 'recommend',
  GOODS: 'goods',
  BABY: 'baby',
  NECESSITY: 'necessity',
  KITCHEN: 'kitchen',
  DIGITAL: 'digital',
  SPORT: 'sport',
  CAR: 'car',
  BOOK: 'book',
} as const;

export type Category = (typeof Category)[keyof typeof Category];
