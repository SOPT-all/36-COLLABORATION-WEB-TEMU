export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_URL = {
  GET_PRODUCT: '/products',
  GET_PRODUCTS_PROMOTION: '/products/promotion',
  GET_PRODUCTS_SEARCH: '/products/search',
  GET_PRODUCTS_DETAIL: (productId: number) => `/products/${productId}`,
  GET_PRODUCTS_DETAIL_REVIEWS: (productId: number) => `/products/${productId}/reviews`,
};
