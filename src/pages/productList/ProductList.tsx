import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetSearchedProductList } from '@api/queries';
import * as styles from '@pages/productList/ProductList.css';
import FilterButton from '@pages/productList/components/filterButton/FilterButton';
import Card from '@shared/components/card/Card';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
import * as Icons from '@svg/index';
import Loading from '@shared/components/Loading/Loading';
import ErrorSearch from '@shared/components/Error/ErrorSearch';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';
  const { data, isLoading, isError, error } = useGetSearchedProductList(keyword);
  const productList = data?.searchedProductList ?? [];

  const [visibleCount, setVisibleCount] = useState(9);
  const visibleProducts = productList.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const shouldShowMoreButton = productList.length > visibleCount;

  if (isError) {
    throw error;
  }

  return (
    <div className={shouldShowMoreButton ? styles.container : styles.containerWithExtraMargin}>
      <FilterButton />
      {isLoading && <Loading />}
      {!isLoading && !isError && productList.length === 0 && (
        <ErrorSearch text="😞 검색 결과가 없습니다." />
      )}

      <div className={styles.listWrapper}>
        {!isLoading &&
          !isError &&
          visibleProducts.map(product => (
            <Card
              key={product.productId}
              size="xl"
              productId={product.productId}
              imageUrl={product.productImage}
              productName={product.productName}
              discountRate={product.discountRate}
              discountPrice={product.discountPrice}
              reviewCount={product.reviewCount}
              productTag={product.productTag}
            />
          ))}
      </div>

      {!isLoading && !isError && productList.length > visibleCount && (
        <div className={styles.buttonWrapper}>
          <ProductActionButton
            text="더보기"
            variant="solid"
            size="sm"
            radius="lg"
            fontSize="sm"
            icon={<Icons.IcArrowDownWhite />}
            onClick={handleShowMore}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
