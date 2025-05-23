import * as styles from '@pages/home/components/ProductCardListContent/ProductCardListContent.css';
import Card from '@shared/components/card/Card';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
import { IcArrowDownWhite } from '@svg/index';
import type { ProductCardData } from '@pages/home/types/response';

interface Props {
  filteredCards: ProductCardData[];
  visibleCount: number;
  onClickMore: () => void;
}

const ProductCardListContent = ({ filteredCards, visibleCount, onClickMore }: Props) => (
  <>
    <div className={styles.listWrapper}>
      {filteredCards.slice(0, visibleCount).map(product => (
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

    {visibleCount < filteredCards.length && (
      <section className={styles.sectionBtn}>
        <ProductActionButton
          text="더보기"
          size="sm"
          radius="md"
          fontSize="sm"
          icon={<IcArrowDownWhite />}
          onClick={onClickMore}
        />
      </section>
    )}
  </>
);

export default ProductCardListContent;
