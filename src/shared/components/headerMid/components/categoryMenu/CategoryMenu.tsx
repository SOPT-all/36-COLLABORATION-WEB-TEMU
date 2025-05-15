import { useState, Fragment } from 'react';
import {
  CATEGORY_TITLE,
  CATEGORY_DETAIL_MAP,
} from '@shared/components/headerMid/constants/CATEGORY';
import * as styles from '@shared/components/headerMid/components/categoryMenu/CategoryMenu.css';
import Text from '@shared/components/text/Text';
import Divider from '@shared/components/divider/Divider';
import type { CategoryId } from '@shared/components/headerMid/types/category';

const CategoryMenu = () => {
  const [hoverCategory, setHoverCategory] = useState<CategoryId>('');
  const defaultCategory: CategoryId = 'fashion';
  const visibleCategory = hoverCategory || defaultCategory;

  return (
    <nav className={styles.container}>
      <ul className={styles.titleWrapper}>
        {CATEGORY_TITLE.map(({ id, iconBlack: IconBlack, iconWhite: IconWhite, title }) => {
          const isHovered = hoverCategory === id;
          const IconComponent = isHovered ? IconWhite : IconBlack;
          const textColor = isHovered ? 'white' : 'gray8';

          return (
            <li
              key={id}
              className={`${styles.titleRow} ${isHovered && styles.titleRowSelected}`}
              onMouseEnter={() => setHoverCategory(id)}
            >
              <IconComponent width="2.4rem" height="2.4rem" />
              <Text tag="body_regular_15" color={textColor}>
                {title}
              </Text>
            </li>
          );
        })}
      </ul>

      {visibleCategory && (
        <div className={styles.currentCategoryContainer}>
          {CATEGORY_DETAIL_MAP[visibleCategory]?.map(
            (section: { title: string; category: { id: string; title: string }[] }) => (
              <Fragment key={section.title}>
                <div className={styles.currentCategoryWrapper}>
                  <Text tag="body_bold_14">{section.title}</Text>
                  <ul className={styles.currentCategoryTextWrapper}>
                    {section.category.map(category => (
                      <li key={category.id}>
                        <Text tag="body_regular_14" className={styles.currentCategoryTextStyle}>
                          {category.title}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
                <Divider direction="vertical" length="100%" thickness="1px" color="gray1" />
              </Fragment>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default CategoryMenu;
