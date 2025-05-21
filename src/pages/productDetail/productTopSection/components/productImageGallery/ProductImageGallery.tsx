import { useState } from 'react';
import * as styles from '@pages/productDetail/productTopSection/components/productImageGallery/ProductImageGallery.css';

interface ProductImageGalleryProps {
  productImages: string[];
}

const ProductImageGallery = ({ productImages }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(productImages[0]);

  return (
    <div className={styles.galleryContainer}>
      <img src={selectedImage} width={552} height={552} alt="썸네일 이미지" />
      <div className={styles.galleryItem}>
        {productImages.map((smallImage, idx) => {
          const isSelected = smallImage === selectedImage;
          return (
            <button
              key={idx}
              onClick={() => setSelectedImage(smallImage)}
              className={styles.galleryImage({ selected: isSelected })}
            >
              <img src={smallImage} width={116} height={116} alt={`썸네일 이미지 ${idx + 1}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageGallery;
