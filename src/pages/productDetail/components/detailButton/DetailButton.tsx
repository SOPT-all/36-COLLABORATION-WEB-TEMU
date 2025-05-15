import * as styles from '@pages/productDetail/components/detailButton/DetailButton.css';
import Text from '@shared/components/text/Text';
import { TAB } from '@pages/productDetail/constant/TAB';
import Divider from '@shared/components/divider/Divider';

interface DetailButtonProps {
  reviewCount?: number;
}

const DetailButton = ({ reviewCount }: DetailButtonProps) => {
  return (
    <section className={styles.detailButtonsContainer}>
      {TAB.map(({ key, label }) => (
        <>
          <button key={key} type="button" className={styles.detailButtonWrapper}>
            <Text tag="body_medium_18" color="gray8">
              {label}
              {key === 'review' && reviewCount && ` (${reviewCount})`}
            </Text>
          </button>
          <Divider direction="vertical" color="gray2" thickness="1px" />
        </>
      ))}
    </section>
  );
};

export default DetailButton;
