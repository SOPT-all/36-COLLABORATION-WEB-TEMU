/**
 * mockImage에서 이미지를 렌더링
 * 이후 api 연동시 이미지 교체
 */

import * as styles from '@pages/productDetail/productTopSection/productImageGallery/ProductImageGallery.css';
import { useState } from 'react';
import { mockProductImages } from '@pages/productDetail/productTopSection/productImageGallery/mockImage';
import { clsx } from 'clsx';

interface ProductImageGalleryProps {
  productImages: string[];
}

const ProductImageGallery = ({ productImages }: ProductImageGalleryProps) => {
  // api 연동시 첫 이미지로 수정
  const [SelectedImage, setSelectedImage] = useState(() => mockProductImages[0]);

  return (
    <div className={styles.galleryContainer}>
      <SelectedImage width={552} height={552} />
      <div className={styles.galleryItem}>
        {mockProductImages.map((IconComponent, idx) => {
          const isSelected = IconComponent === SelectedImage;
          return (
            <button
              key={idx}
              onClick={() => setSelectedImage(() => IconComponent)}
              className={clsx(styles.galleryItemButton, {
                [styles.galleryItemSelected]: isSelected,
              })}
            >
              <IconComponent width={116} height={116} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageGallery;
