import type { ProductDetailResponseTypes } from '@pages/productDetail/types/response';

export const mockProductDetailData: ProductDetailResponseTypes = {
  company: '스마일마켓',
  productName:
    '손으로 세척할 수 있는 캔버스 토트 백, 빈티지 스타일 지퍼 클로저, 단색, 폴리에스터 안감, 어깨 스트랩 포함, 학생, 통근자, 캐주얼용',
  discountRate: 50,
  originalPrice: 30000,
  discountPrice: 15000,
  productImages: [
    'https://images.unsplash.com/photo-1585386959984-a415522b8315?auto=format&fit=crop&w=800&q=80', // 제품 대표 이미지
    'https://images.unsplash.com/photo-1622445272661-77f9d1822b98?auto=format&fit=crop&w=800&q=80', // 착용샷
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', // 다양한 각도
  ],
  productColors: ['베이지', '어두운 갈색', '카키색'],
  productDetails: [
    'https://placehold.co/800x600/beige/333333?text=chair',
    'https://placehold.co/800x600/654321/ffffff?text=sofa',
    'https://placehold.co/800x600/6b8e23/ffffff?text=shoes',
  ],

  reviewCount: 2,
  productId: 1,
};
