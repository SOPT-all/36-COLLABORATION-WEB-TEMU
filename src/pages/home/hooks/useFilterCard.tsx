import { useState } from 'react';
import { dummyCardsXL } from '@/pages/home/mockHomeData';

export default function FilterCard() {
  const [selectedTag, setSelectedTag] = useState<string>('recommend');

  const filteredCards = dummyCardsXL.filter(card => card.category === selectedTag);

  const handleTagClick = (tagId: string) => {
    setSelectedTag(tagId);
  };

  return { selectedTag, filteredCards, handleTagClick };
}
