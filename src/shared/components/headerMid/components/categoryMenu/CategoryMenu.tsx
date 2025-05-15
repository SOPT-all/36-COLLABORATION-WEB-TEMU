import { useState } from 'react';
import {
  CATEGORY_TITLE,
  CATEGORY_DETAIL_MAP,
} from '@shared/components/headerMid/constants/CATEGORY';
import * as styles from '@shared/components/headerMid/components/categoryMenu/CategoryMenu.css';
import Text from '@shared/components/text/Text';
import Divider from '@shared/components/divider/Divider';

type CategoryId = 'fashion' | 'baby' | 'life' | 'kitchen' | 'digital' | 'sports' | 'car' | 'book';

const CategoryMenu = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryId>('kitchen'); // currentCategory에 타입 지정

  return (
    <nav className={styles.container}>
      <ul className={styles.titleWrapper}>
        {CATEGORY_TITLE.map(({ id, icon: Icon, title }) => (
          <li
            key={id}
            className={styles.titleRow}
            onClick={() => setCurrentCategory(id as CategoryId)}
          >
            <Icon width="2.4rem" height="2.4rem" />
            <Text tag="body_regular_15" color="gray8">
              {title}
            </Text>
          </li>
        ))}
      </ul>

      {currentCategory && (
        <div className={styles.currentCategoryContainer}>
          {CATEGORY_DETAIL_MAP[currentCategory]?.map(
            (section: { title: string; category: { id: string; title: string }[] }) => (
              <>
                <div key={section.title} className={styles.currentCategoryWrapper}>
                  <Text tag="body_bold_14">{section.title}</Text>
                  <ul className={styles.currentCategoryTextWrapper}>
                    {section.category.map((category: { id: string; title: string }) => (
                      <li key={category.id}>
                        <Text tag="body_regular_14" color="gray6">
                          {category.title}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
                <Divider direction="vertical" length="100%" thickness="1px" color="gray1" />
              </>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default CategoryMenu;
