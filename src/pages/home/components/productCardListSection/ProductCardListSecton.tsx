import { useState } from 'react';
import * as styles from '@/pages/home/Home.css';
import FamilyMonthTitle from '@/../public/img/familyMonthTitle.png';
import Tag from '@pages/home/components/Tag/Tag';
import Text from '@shared/components/text/Text';
import ProductCardListContent from '@pages/home/components/ProductCardListContent/ProductCardListContent';
import useFilterCard from '@pages/home/hooks/useFilterCard';
import { useGetProductList } from '@api/queries';

const ProductCardListSection = () => {
  const { data: productListData } = useGetProductList();
  const [visibleCount, setVisibleCount] = useState(9);

  const searchedList = productListData?.productMainInfos ?? [];

  const { selectedTag, filteredCards, handleTagClick } = useFilterCard({
    productList: searchedList,
    isLoading: false,
  });

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <>
      <div className={styles.listTitleWrapper}>
        <img src={FamilyMonthTitle} className={styles.familyMonthTitle} />
        <Text tag="head_bold_24" color="black">
          관심 상품 둘러보기
        </Text>
      </div>
      <Tag selectedTag={selectedTag} handleTagClick={handleTagClick} />
      <ProductCardListContent
        filteredCards={filteredCards}
        visibleCount={visibleCount}
        onClickMore={handleShowMore}
      />
    </>
  );
};

export default ProductCardListSection;
