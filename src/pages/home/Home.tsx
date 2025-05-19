import Card from '@shared/components/card/Card';
import HeaderMid from '@shared/components/headerMid/HeaderMid';

const Home = () => {
  const dummyXL = [
    {
      size: 'xl',
      productId: 1,
      productName: '무조립 접이식, 어쩌구 저쩌구,,,',
      discountRate: 50,
      discountPrice: 9900,
      productImage: 'https://example.com/image1.jpg',
      reviewCount: 21,
      productTag: '재구매 고객이 많은 스토어',
    },
    {
      size: 'xl',
      productId: 2,
      productName: '고급 원목 책상, 심플한 디자인',
      discountRate: 30,
      discountPrice: 49000,
      productImage: 'https://example.com/image2.jpg',
      reviewCount: 45,
      productTag: '',
    },
  ];

  const dummyL = [
    {
      size: 'l',
      productId: 3,
      productName: '게이밍 의자, 인체공학 설계',
      discountRate: 20,
      discountPrice: 129000,
      productImage: 'https://example.com/image3.jpg',
      productTag: '',
    },
    {
      size: 'l',
      productId: 4,
      productName: '무소음 선풍기, 스탠드형',
      discountRate: 15,
      discountPrice: 37900,
      productImage: 'https://example.com/image4.jpg',
      productTag: '',
    },
  ];

  return (
    <div>
      <HeaderMid />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', margin: '2rem' }}>
        {dummyXL.map(item => (
          <Card key={item.productId} {...item} />
        ))}

        {dummyL.map(item => (
          <Card key={item.productId} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
