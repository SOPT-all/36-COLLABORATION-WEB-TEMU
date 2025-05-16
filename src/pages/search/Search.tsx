import * as styles from '@pages/search/Search.css'
import FilterButton from '@pages/search/components/filterButton/FilterButton';
import Card from '@shared/components/card/Card'
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
import * as Icons from '@svg/index';
import { dummyCardsXL } from '@pages/search/mockData';

const Search = () => {
  return (
    <div className={styles.pageWrapper}>
      <FilterButton />
      <div className={styles.listWrapper}>
        {dummyCardsXL.map((cardData) => (
          <Card key={cardData.productId} {...cardData} size='xl' />
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <ProductActionButton
          text='더보기'
          variant='solid'
          size='sm'
          radius='lg'
          fontSize='sm'
          icon={<Icons.IcArrowDownWhite/>}
        />
      </div>
    </div>
  );
};

export default Search;