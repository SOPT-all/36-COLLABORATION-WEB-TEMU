import { useState } from 'react';
import { dummyCardsXL } from '@/pages/home/mockHomeData';
import { Category } from '@/pages/home/components/constant/categorys';

const FilterCard = () => {
  const [selectedTag, setSelectedTag] = useState<Category>(Category.RECOMMEND);

  const filteredCards = dummyCardsXL.filter(card => card.categoryList.includes(selectedTag));

  const handleTagClick = (category: Category) => {
    setSelectedTag(category);
  };

  return { selectedTag, filteredCards, handleTagClick };
};

export default FilterCard;
