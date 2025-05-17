export type SortType = 'recent' | 'popularity';

export interface ReviewFilterBarProps {
  sortType: SortType;

  // eslint-disable-next-line no-unused-vars
  onChangeSortType: (type: SortType) => void;
}
