import { useState } from 'react';
import { dummyCardsXL } from '@/pages/home/mockHomeData';

export default function FilterCard() {
  const [selectedTag, setSelectedTag] = useState<string>('recommend');

  const filteredCards = dummyCardsXL.filter(card => card.category === selectedTag);

  const handleTagClick = (id: string) => {
    setSelectedTag(id);
  };

  return { selectedTag, filteredCards, handleTagClick };
}
