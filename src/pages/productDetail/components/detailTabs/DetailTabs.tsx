import { useState } from 'react';
import * as styles from '@pages/productDetail/components/detailTabs/DetailTabs.css';
import { TAB } from '@pages/productDetail/constant/TAB';
import Divider from '@shared/components/divider/Divider';

interface DetailTabsProps {
  reviewCount?: number;
  onTabClick: (key: string) => void;
}

const DetailTabs = ({ reviewCount, onTabClick }: DetailTabsProps) => {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <nav className={styles.detailTabsContainer}>
      {TAB.map(({ key, label }, index) => (
        <div key={key} className={styles.detailTabsContainer}>
          <button
            type="button"
            className={styles.detailTabsWrapper({ isClicked: key === selectedTab })}
            onClick={() => {
              setSelectedTab(key);
              onTabClick(key);
            }}
          >
            <p>
              {label}
              {key === 'review' && reviewCount ? ` (${reviewCount})` : ''}
            </p>
          </button>
          {index !== TAB.length - 1 && (
            <Divider direction="vertical" color="gray2" thickness="1px" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default DetailTabs;
