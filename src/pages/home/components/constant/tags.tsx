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

export const TAG = [
  { id: 'recommend', text: '추천', icon: <IcRecommendBlack width={'3.2rem'} height={'3.2rem'} /> },
  {
    id: 'goods',
    text: '의류·잡화·뷰티',
    icon: <IcGoodsBlack width={'3.2rem'} height={'3.2rem'} />,
  },
  { id: 'baby', text: '유·아동', icon: <IcBabyBlack width={'3.2rem'} height={'3.2rem'} /> },
  {
    id: 'necessity',
    text: '생활/생필품',
    icon: <IcNecessityBlack width={'3.2rem'} height={'3.2rem'} />,
  },
  { id: 'kitchen', text: '홈·주방', icon: <IcKitchenBlack width={'3.2rem'} height={'3.2rem'} /> },
  {
    id: 'digital',
    text: '디지털·가전',
    icon: <IcDigitalBlack width={'3.2rem'} height={'3.2rem'} />,
  },
  { id: 'sport', text: '스포츠·건강', icon: <IcSportBlack width={'3.2rem'} height={'3.2rem'} /> },
  { id: 'car', text: '자동차·공구', icon: <IcCarBlack width={'3.2rem'} height={'3.2rem'} /> },
  { id: 'book', text: '도서', icon: <IcBookBlack width={'3.2rem'} height={'3.2rem'} /> },
];
