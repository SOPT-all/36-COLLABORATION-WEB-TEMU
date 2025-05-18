import { useState } from 'react';
import * as styles from '@pages/productDetail/components/detailTabs/DetailTabs.css';
import { TAB } from '@pages/productDetail/constant/TAB';
import Divider from '@shared/components/divider/Divider';

interface DetailTabsProps {
  reviewCount?: number;
  // eslint-disable-next-line no-unused-vars
  onTabClick: (tab: string) => void;
}

const DetailTabs = ({ reviewCount, onTabClick }: DetailTabsProps) => {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <nav className={styles.detailTabsContainer}>
      {TAB.map((tab, index) => (
        <div key={tab.key} className={styles.detailTabsContainer}>
          <button
            type="button"
            className={styles.detailTabsWrapper({ isClicked: tab.key === selectedTab })}
            onClick={() => {
              setSelectedTab(tab.key);
              onTabClick(tab.key);
            }}
          >
            <p>
              {tab.label}
              {tab.key === 'review' && reviewCount ? ` (${reviewCount})` : ''}
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
