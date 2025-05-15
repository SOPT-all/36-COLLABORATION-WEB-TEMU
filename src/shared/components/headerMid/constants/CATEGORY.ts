import * as Icons from '@svg/index';
import type { CategoryTitleTypes } from '@shared/components/headerMid/types/category';

export const CATEGORY_TITLE: CategoryTitleTypes[] = [
  {
    id: 'fashion',
    iconBlack: Icons.IcGoodsBlack,
    iconWhite: Icons.IcGoodsWhite,
    title: '의류·잡화·뷰티',
  },
  {
    id: 'baby',
    iconBlack: Icons.IcBabyBlack,
    iconWhite: Icons.IcBabyWhite,
    title: '유아동',
  },
  {
    id: 'life',
    iconBlack: Icons.IcGoodsBlack,
    iconWhite: Icons.IcGoodsWhite,
    title: '생필품',
  },
  {
    id: 'kitchen',
    iconBlack: Icons.IcKitchenBlack,
    iconWhite: Icons.IcKitchenWhite,
    title: '홈·주방',
  },
  {
    id: 'digital',
    iconBlack: Icons.IcDigitalBlack,
    iconWhite: Icons.IcDigitalWhite,
    title: '디지털·가전',
  },
  {
    id: 'sports',
    iconBlack: Icons.IcSportBlack,
    iconWhite: Icons.IcSportWhite,
    title: '스포츠·건강',
  },
  {
    id: 'car',
    iconBlack: Icons.IcCarBlack,
    iconWhite: Icons.IcCarWhite,
    title: '자동차·공구',
  },
  {
    id: 'book',
    iconBlack: Icons.IcBookBlack,
    iconWhite: Icons.IcBookWhite,
    title: '도서',
  },
];

export const CATEGORY_DETAIL_MAP = {
  fashion: [
    {
      title: '의류',
      category: [
        { id: 'woman', title: '여성의류' },
        { id: 'man', title: '남성의류' },
        { id: 'underwear', title: '언더웨어' },
      ],
    },
    {
      title: '잡화',
      category: [
        { id: 'shoes', title: '신발' },
        { id: 'bag', title: '가방/잡화' },
        { id: 'accessory', title: '쥬얼리/시계' },
      ],
    },
    {
      title: '뷰티',
      category: [
        { id: 'skincare', title: '스킨케어' },
        { id: 'makeup', title: '메이크업' },
        { id: 'body/hair', title: '바디/헤어' },
        { id: 'mens-makeup', title: '남성용 화장품' },
        { id: 'perfume', title: '향수' },
        { id: 'tool', title: '미용소품/기기' },
      ],
    },
  ],
  baby: [
    {
      title: '유아동',
      category: [
        { id: 'babycare', title: '출산/육아' },
        { id: 'toy', title: '장난감/완구' },
        { id: 'baby-fashion', title: '유아동 의류' },
        { id: 'baby-shoes', title: '유아동 신발' },
        { id: 'baby-tool', title: '유아동 잡화' },
      ],
    },
  ],
  life: [
    {
      title: '생필품',
      category: [
        { id: 'tissue', title: '화장지/물티슈' },
        { id: 'cleanser', title: '세제/세정제' },
        { id: 'clean', title: '위생용품' },
      ],
    },
  ],
  kitchen: [
    {
      title: '홈 데코',
      category: [
        { id: 'furniture', title: '가구/DIY' },
        { id: 'curtain', title: '침구/커튼' },
        { id: 'lighting', title: '조명/인테리어' },
        { id: 'event', title: '이벤트 용품' },
      ],
    },
    {
      title: '주방',
      category: [
        { id: 'tools', title: '주방/조리도구' },
        { id: 'knife', title: '냄비/팬/솥' },
        { id: 'dining', title: '식기/그릇' },
        { id: 'cup', title: '컵/잔/물병' },
        { id: 'storage', title: '밀폐/보관/저장용기' },
        { id: 'cutlery', title: '커트러리' },
        { id: 'organizer', title: '주방수납정리' },
      ],
    },
  ],
  digital: [
    {
      title: '컴퓨터',
      category: [
        { id: 'laptop', title: '노트북/데스크탑' },
        { id: 'monitor', title: '모니터/프린터' },
        { id: 'peripherals', title: 'PC주변기기' },
        { id: 'storage', title: '저장장치' },
      ],
    },
    {
      title: '디지털',
      category: [
        { id: 'mobile', title: '모바일/태블릿' },
        { id: 'camera', title: '카메라' },
        { id: 'game', title: '게임' },
        { id: 'audio', title: '음향기기' },
      ],
    },
    {
      title: '가전',
      category: [
        { id: 'video', title: '영상가전' },
        { id: 'kitchen_appliance', title: '주방가전' },
        { id: 'seasonal', title: '계절가전' },
        { id: 'life_appliance', title: '생활/미용가전' },
        { id: 'music_appliance', title: '음향가전' },
        { id: 'health_appliance', title: '건강가전' },
      ],
    },
  ],
  sports: [
    {
      title: '스포츠',
      category: [
        { id: 'sportswear', title: '스포츠의류/운동화' },
        { id: 'fitness', title: '휘트니스/수영' },
        { id: 'racket', title: '구기/라켓' },
        { id: 'golf', title: '골프' },
        { id: 'bike', title: '자전거/보드/레저' },
        { id: 'camping', title: '캠핑/낚시' },
        { id: 'outdoor', title: '등산/아웃도어' },
      ],
    },
    {
      title: '건강',
      category: [{ id: 'healthcare', title: '건강/의료용품' }],
    },
  ],
  car: [
    {
      title: '자동차',
      category: [{ id: 'car_accessory', title: '자동차용품' }],
    },
    {
      title: '공구',
      category: [
        { id: 'tools', title: '공구' },
        { id: 'safety_tools', title: '안전용품' },
      ],
    },
  ],
  book: [
    {
      title: '도서',
      category: [
        { id: 'korean', title: '국내도서' },
        { id: 'foreign', title: '외국도서' },
        { id: 'children', title: '유아도서' },
        { id: 'education', title: '학습/교육도서' },
      ],
    },
    {
      title: '음반',
      category: [{ id: 'kpop', title: 'K-POP 음반' }],
    },
  ],
};
