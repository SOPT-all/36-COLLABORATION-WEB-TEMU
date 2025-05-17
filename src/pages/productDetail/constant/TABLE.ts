import type { DetailCellTypes } from '@pages/productDetail/types/table';

export const DETAIL_TABLE: DetailCellTypes[][] = [
  [
    { title: '설치유형', value: '독립형' },
    { title: '선반 유형', value: '슬라이딩 선반' },
  ],
  [
    { title: '재료', value: '독립형' },
    { title: '상품 ID', value: '슬라이딩 선반' },
  ],
  [
    { title: '참고*부피', value: '독립형' },
    { title: '참고*중량', value: '슬라이딩 선반' },
  ],
  [
    { title: '모델명', value: '상품상세 페이지 참조' },
    { title: '수입신고', value: '-' },
  ],
  [
    { title: '제조일자/유통기한', value: '-' },
    { title: '인증 정보', value: '-' },
  ],
  [
    { title: '추가 인증정보', value: '-' },
    { title: '품질보증기준', value: '-' },
  ],
  [
    { title: '제조자', value: '-' },
    { title: '원산지', value: 'Hebel,China' },
  ],
  [
    {
      title: 'A/S 책임자와 전화번호 또는 소비자 상담 관련 전화번호',
      value: '-',
      colSpan: 3,
    },
  ],
];
