import * as Icons from '@svg/index';
import type { IconPosition } from '@pages/productList/types/iconPosition'

export const SEARCH_FILTER = {
  items: [
    { id: 'filter', text: '필터', icon: Icons.IcReviewFilter, iconPosition: 'left' as IconPosition },
    { id: 'finish-today', text: '오늘 종료되는 혜택', icon: Icons.IcFlashLineGray, iconPosition: 'left' as IconPosition },
    { id: 'sorting', text: '정렬기준: 관련성', icon: Icons.IcArrowDownGrayS },
    { id: 'benefit', text: '혜택', icon: Icons.IcArrowDownGrayS },
    { id: 'color', text: '색상', icon: Icons.IcArrowDownGrayS },
    { id: 'material', text: '소재', icon: Icons.IcArrowDownGrayS },
    { id: 'shelf-type', text: '선반 유형', icon: Icons.IcArrowDownGrayS },
    { id: 'assembly-required', text: '조립 여부', icon: Icons.IcArrowDownGrayS},
  ],
};