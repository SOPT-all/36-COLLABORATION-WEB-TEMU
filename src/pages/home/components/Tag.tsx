import { useState } from 'react';
import * as styles from './Tag.css.ts';

import Ic_heart from '@svg/ic_recommend_black.svg?react';
import Ic_book from '@svg/ic_book_black.svg?react';
import Ic_car from '@svg/ic_car_black.svg?react';
import Ic_clothes from '@svg/ic_goods_black.svg?react';
import Ic_digital from '@svg/ic_digital_black.svg?react';
import Ic_house from '@svg/ic_necessity_black.svg?react';
import Ic_infant from '@svg/ic_baby_black.svg?react';
import Ic_kitchen from '@svg/ic_kitchen_black.svg?react';
import Ic_sport from '@svg/ic_sport_black.svg?react';

const Tag = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const TAG = [
    { text: '인기', icon: <Ic_heart width={'3.2rem'} height={'3.2rem'} /> },
    { text: '도서', icon: <Ic_book width={'3.2rem'} height={'3.2rem'} /> },
    { text: '자동차용품', icon: <Ic_car width={'3.2rem'} height={'3.2rem'} /> },
    { text: '패션의류', icon: <Ic_clothes width={'3.2rem'} height={'3.2rem'} /> },
    { text: '디지털기기', icon: <Ic_digital width={'3.2rem'} height={'3.2rem'} /> },
    { text: '생활/주거', icon: <Ic_house width={'3.2rem'} height={'3.2rem'} /> },
    { text: '유아동', icon: <Ic_infant width={'3.2rem'} height={'3.2rem'} /> },
    { text: '주방용품', icon: <Ic_kitchen width={'3.2rem'} height={'3.2rem'} /> },
    { text: '스포츠', icon: <Ic_sport width={'3.2rem'} height={'3.2rem'} /> },
  ];

  return (
    <div className={styles.tagWrapper}>
      {TAG.map(tag => (
        <div
          key={tag.text}
          className={styles.tag({ selected: selectedTag === tag.text })}
          onClick={() => setSelectedTag(tag.text)}
        >
          {tag.icon}
          <p>{tag.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Tag;
