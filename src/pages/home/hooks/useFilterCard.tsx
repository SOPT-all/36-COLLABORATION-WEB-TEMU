import { useState, useMemo } from 'react';
import { Category } from '@/pages/home/components/constant/categorys';
import type { ProductCardData } from '@pages/home/types/response';

interface UseFilterCardProps {
  productList: ProductCardData[];
  isLoading: boolean;
}

const useFilterCard = ({ productList, isLoading }: UseFilterCardProps) => {
  const [selectedTag, setSelectedTag] = useState<Category>(Category.RECOMMEND);

  const filteredCards = useMemo(() => {
    if (isLoading) return [];
    if (!selectedTag) return productList;
    return productList.filter(card => card.categoryList.includes(selectedTag));
  }, [productList, selectedTag, isLoading]);

  const handleTagClick = (id: Category) => {
    setSelectedTag(id);
  };

  return { selectedTag, filteredCards, handleTagClick };
};

export default useFilterCard;
