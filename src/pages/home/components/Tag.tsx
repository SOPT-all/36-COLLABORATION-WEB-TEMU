import { useState } from 'react';
import * as styles from '@/pages/home/components/Tag.css';
import Text from '@shared/components/text/Text';
import { TAG } from './constant/tags';

const Tag = () => {
  const [selectedTag, setSelectedTag] = useState<string>('recommend');

  return (
    <div className={styles.tagWrapper}>
      {TAG.map(tag => (
        <div
          className={styles.tag({ selected: selectedTag === tag.id })}
          key={tag.id}
          onClick={() => setSelectedTag(tag.id)}
        >
          {tag.icon}
          <Text
            tag={selectedTag == tag.id ? 'body_bold_14' : 'body_regular_14'}
            color={selectedTag == tag.id ? 'white' : 'black'}
          >
            {tag.text}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default Tag;
