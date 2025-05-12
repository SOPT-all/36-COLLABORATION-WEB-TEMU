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
  const viewBox = hover ? '0 0 24 24' : '0 0 36 24';

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }} // 핵심! block으로 명시
    >
      {!hover && (
        <>
          <rect x="0.5" y="0.5" width="35" height="23" rx="11.5" fill="white" />
          <rect x="0.5" y="0.5" width="35" height="23" rx="11.5" stroke={color} />
        </>
      )}
      <path
        d={
          hover
            ? 'M3.25 6H5.59393C6.0472 6 6.44378 6.30487 6.56032 6.7429L8.5594 14.2571C8.67593 14.6951 9.07252 15 9.52579 15H18.2192C18.6781 15 19.0781 14.6877 19.1894 14.2425L21 7'
            : 'M8.25 6H10.5939C11.0472 6 11.4438 6.30487 11.5603 6.7429L13.5594 14.2571C13.6759 14.6951 14.0725 15 14.5258 15H23.2192C23.6781 15 24.0781 14.6877 24.1894 14.2425L26 7'
        }
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={hover ? '10.5' : '15.5'}
        cy="18.5"
        r="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={hover ? '17.5' : '22.5'}
        cy="18.5"
        r="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={hover ? 'M12 9H16M14 7L14 11' : 'M17 9H21M19 7L19 11'}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CartButton;
