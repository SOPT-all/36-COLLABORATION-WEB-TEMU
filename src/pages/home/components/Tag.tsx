import { useState } from 'react';
import * as styles from '@/pages/home/components/Tag.css';

import {
  IcRecommendBlack,
  IcBookBlack,
  IcCarBlack,
  IcGoodsBlack,
  IcDigitalBlack,
  IcNecessityBlack,
  IcBabyBlack,
  IcKitchenBlack,
  IcSportBlack,
} from '@svg/index.ts';
import Text from '@shared/components/text/Text';

const Tag = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const TAG = [
    { text: '인기', icon: <IcRecommendBlack width={'3.2rem'} height={'3.2rem'} /> },
    { text: '도서', icon: <IcBookBlack width={'3.2rem'} height={'3.2rem'} /> },
    { text: '자동차용품', icon: <IcCarBlack width={'3.2rem'} height={'3.2rem'} /> },
    { text: '패션의류', icon: <IcGoodsBlack width={'3.2rem'} height={'3.2rem'} /> },
    { text: '디지털기기', icon: <IcDigitalBlack width={'3.2rem'} height={'3.2rem'} /> },
    { text: '생활/주거', icon: <IcNecessityBlack width={'3.2rem'} height={'3.2rem'} /> },
    { text: '유아동', icon: <IcBabyBlack width={'3.2rem'} height={'3.2rem'} /> },
    { text: '주방용품', icon: <IcKitchenBlack width={'3.2rem'} height={'3.2rem'} /> },
    { text: '스포츠', icon: <IcSportBlack width={'3.2rem'} height={'3.2rem'} /> },
  ];

  return (
    <div className={styles.tagWrapper}>
      {TAG.map(tag => (
        <div key={tag.text} onClick={() => setSelectedTag(tag.text)}>
          {tag.icon}
          <Text
            tag={selectedTag == tag.text ? 'body_bold_14' : 'body_regular_14'}
            color={selectedTag == tag.text ? 'white' : 'black'}
            className=""
          >
            {tag.text}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default Tag;
