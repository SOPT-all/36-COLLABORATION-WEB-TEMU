import { SEARCH_FILTER } from '@pages/search/constants/SEARCH_FILTER';
import IconButton from '@pages/search/components/filterButton/components/iconButton/IconButton';
import * as styles from '@pages/search/components/filterButton/FilterButton.css';

const FilterButton = () => {
  return (
    <div className={styles.container}>
      {SEARCH_FILTER.items.map(({ id, text, icon: Icon, iconPosition }) => (
        <IconButton
          key={id}
          text={text}
          icon={Icon && <Icon width="1.2rem" height="1.2rem" />}
          iconPosition={iconPosition}
        />
      ))}
    </div>
  );
};

export default FilterButton;
