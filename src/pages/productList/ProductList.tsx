import * as styles from '@pages/productList/ProductList.css';
import FilterButton from '@pages/productList/components/filterButton/FilterButton';
import Card from '@shared/components/card/Card';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
import * as Icons from '@svg/index';
import { mockSearchData } from '@pages/productList/mockData';

const ProductList = () => {
  return (
    <div className={styles.container}>
      <FilterButton />
      <div className={styles.listWrapper}>
        {mockSearchData.map(cardData => (
          <Card
            key={cardData.productId}
            size="xl"
            productId={cardData.productId}
            imageUrl={cardData.imageUrl}
            productName={cardData.productName}
            discountRate={cardData.discountRate}
            discountPrice={cardData.discountPrice}
            reviewCount={cardData.reviewCount}
            categoryList={cardData.category}
            productTag={cardData.productTag}
          />
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <ProductActionButton
          text="더보기"
          variant="solid"
          size="sm"
          radius="lg"
          fontSize="sm"
          icon={<Icons.IcArrowDownWhite />}
        />
      </div>
    </div>
  );
};

export default ProductList;
