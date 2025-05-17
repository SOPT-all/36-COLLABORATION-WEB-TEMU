import * as styles from '@pages/productDetail/components/detailTabs/DetailTabs.css';
import Text from '@shared/components/text/Text';
import { TAB } from '@pages/productDetail/constant/TAB';
import Divider from '@shared/components/divider/Divider';

interface DetailTabsProps {
  reviewCount?: number;
}

const DetailTabs = ({ reviewCount }: DetailTabsProps) => {
  return (
    <nav className={styles.detailTabsContainer}>
      {TAB.map(({ key, label }) => (
        <>
          <button key={key} type="button" className={styles.detailTabsWrapper}>
            <Text tag="body_medium_18" color="gray8">
              {label}
              {key === 'review' && reviewCount && ` (${reviewCount})`}
            </Text>
          </button>
          <Divider direction="vertical" color="gray2" thickness="1px" />
        </>
      ))}
    </nav>
  );
};

export default DetailTabs;
