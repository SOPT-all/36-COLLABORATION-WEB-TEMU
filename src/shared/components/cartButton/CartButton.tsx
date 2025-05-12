interface CartButtonInterface {
  hover?: boolean;
  width?: string;
  height?: string;
}
const CartButton = ({ hover = false, width, height }: CartButtonInterface) => {
  const color = hover ? '#FF7710' : '#666666';

  // 너비/높이 기본값 설정
  const svgWidth = width || (hover ? '24' : '36');
  const svgHeight = height || '24';
  const viewBox = '0 0 36 24';

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', cursor: 'pointer' }}
    >
      <rect x="0.5" y="0.5" width="35" height="23" rx="11.5" fill="white" stroke={color} />
      <path
        d={
          'M8.25 6H10.5939C11.0472 6 11.4438 6.30487 11.5603 6.7429L13.5594 14.2571C13.6759 14.6951 14.0725 15 14.5258 15H23.2192C23.6781 15 24.0781 14.6877 24.1894 14.2425L26 7'
        }
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={'15.5'}
        cy="18.5"
        r="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={'22.5'}
        cy="18.5"
        r="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={'M17 9H21M19 7L19 11'} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CartButton;
