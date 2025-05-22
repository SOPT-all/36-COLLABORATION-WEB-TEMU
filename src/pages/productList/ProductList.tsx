import { useSearchParams } from 'react-router-dom';
import { useGetSearchedProductList } from '@api/queries';
import * as styles from '@pages/productList/ProductList.css';
import FilterButton from '@pages/productList/components/filterButton/FilterButton';
import Card from '@shared/components/card/Card';
import Text from '@shared/components/text/Text';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
import * as Icons from '@svg/index';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';

  const { data, isLoading, isError } = useGetSearchedProductList(keyword);
  const productList = data?.productMainInfos ?? [];

  const renderMessage = (message: string) => (
    <Text tag="body_bold_18" color="black" className={styles.messageWrapper}>
      {message}
    </Text>
  );

  return (
    <div className={styles.container}>
      <FilterButton />
      <div className={styles.listWrapper}>
        {isLoading && renderMessage('로딩 중...')}
        {isError && renderMessage('에러가 발생했습니다.')}
        {!isLoading &&
          !isError &&
          productList.length === 0 &&
          renderMessage('검색 결과가 없습니다.')}

        {!isLoading &&
          !isError &&
          productList.map(product => (
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

      {!isLoading && !isError && productList.length > 0 && (
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
      )}
    </div>
  );
};

export default ProductList;
