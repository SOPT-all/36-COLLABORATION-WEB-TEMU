import * as styles from '@pages/home/components/Tag/Tag.css';
import Text from '@shared/components/text/Text';
import { TAG } from '../constant/tags';
import type { Category } from '../constant/categorys';

interface TagProps {
  selectedTag: Category;
  handleTagClick: (_id: Category) => void;
}

const Tag = ({ selectedTag, handleTagClick }: TagProps) => {
  return (
    <div className={styles.tagWrapper}>
      {TAG.map(({ id, text, icon }) => (
        <div
          className={styles.tag({ selected: selectedTag === id })}
          key={id}
          onClick={() => handleTagClick(id)}
        >
          {icon}
          <Text
            tag={selectedTag == id ? 'body_bold_14' : 'body_regular_14'}
            color={selectedTag == id ? 'white' : 'black'}
          >
            {text}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default Tag;
