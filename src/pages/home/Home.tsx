import Card from '@shared/components/card/Card';

const Home = () => {
  const dummyCardData = {
    size: 'l',
    img: 'https://placehold.co/600x400',
    repurchase: true,
    title: 'USM Haller Storage Unit',
    discount: 15,
    price: 89000,
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Card
        size={dummyCardData.size}
        repurchase={dummyCardData.repurchase}
        img={dummyCardData.img}
        title={dummyCardData.title}
        discount={dummyCardData.discount}
        price={dummyCardData.price}
      />
    </div>
  );
};

export default Home;
