import { SEARCH_FILTER } from '@pages/productList/constants/SEARCH_FILTER';
import IconButton from '@pages/productList/components/filterButton/components/iconButton/IconButton';
import {container} from '@pages/productList/components/filterButton/FilterButton.css';

const FilterButton = () => {
  return (
    <div className={container}>
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
