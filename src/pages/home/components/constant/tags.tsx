import {
  IcRecommendBlack,
  IcBookBlack,
  IcCarBlack,
  IcGoodsBlack,
  IcDigitalBlack,
  IcNecessityBlack,
  IcBabyBlack,
  IcKitchenBlack,
  IcSportBlack,
} from '@svg/index.ts';
import { Category } from '@/pages/home/components/constant/categorys';

export const TAG = [
  {
    id: Category.RECOMMEND,
    text: '추천',
    icon: <IcRecommendBlack width="3.2rem" height="3.2rem" />,
  },
  {
    id: Category.GOODS,
    text: '의류·잡화·뷰티',
    icon: <IcGoodsBlack width="3.2rem" height="3.2rem" />,
  },
  { id: Category.BABY, text: '유·아동', icon: <IcBabyBlack width="3.2rem" height="3.2rem" /> },
  {
    id: Category.NECESSITY,
    text: '생활/생필품',
    icon: <IcNecessityBlack width="3.2rem" height="3.2rem" />,
  },
  {
    id: Category.KITCHEN,
    text: '홈·주방',
    icon: <IcKitchenBlack width="3.2rem" height="3.2rem" />,
  },
  {
    id: Category.DIGITAL,
    text: '디지털·가전',
    icon: <IcDigitalBlack width="3.2rem" height="3.2rem" />,
  },
  {
    id: Category.SPORT,
    text: '스포츠·건강',
    icon: <IcSportBlack width="3.2rem" height="3.2rem" />,
  },
  { id: Category.CAR, text: '자동차·공구', icon: <IcCarBlack width="3.2rem" height="3.2rem" /> },
  { id: Category.BOOK, text: '도서', icon: <IcBookBlack width="3.2rem" height="3.2rem" /> },
];