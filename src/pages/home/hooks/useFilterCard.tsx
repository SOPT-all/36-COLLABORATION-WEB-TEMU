import { useState, useEffect } from 'react';
import { Category } from '@/pages/home/components/constant/categorys';
import type { ProductCardData } from '@/pages/productList/types/response';

interface UseFilterCardProps {
  productList: ProductCardData[];
  isLoading: boolean;
}

const useFilterCard = ({ productList, isLoading }: UseFilterCardProps) => {
  const [selectedTag, setSelectedTag] = useState<Category>(Category.RECOMMEND);
  const [filteredCards, setFilteredCards] = useState<ProductCardData[]>([]);

  useEffect(() => {
    if (!isLoading) {
      const filtered = productList.filter(card => card.categoryList.includes(selectedTag));
      setFilteredCards(filtered);
    }
  }, [productList, selectedTag, isLoading]);

  const handleTagClick = (id: Category) => {
    setSelectedTag(id);
  };

  return { selectedTag, filteredCards, handleTagClick };
};

export default useFilterCard;
