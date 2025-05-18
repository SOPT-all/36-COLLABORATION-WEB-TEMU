import * as Icons from '@svg/index';

export const FOOTER_TOP_SECTIONS = {
  COMPANY_INFO: {
    title: '회사 정보',
    items: [
      { id: 'temu-intro', text: 'Temu 소개' },
      { id: 'temu-anonymous', text: 'Temu 억만장자처럼 쇼핑하기' },
      { id: 'affiliate', text: '제휴사 및 영향력 행사자: 커미션 받기' },
      { id: 'contact', text: '문의하기' },
      { id: 'recruitment', text: '채용 정보' },
      { id: 'news', text: '뉴스' },
      { id: 'tree-planting', text: 'Temu의 나무 심기 프로그램' },
    ],
  },

  CUSTOMER_CENTER: {
    title: '고객 센터',
    items: [
      { id: 'return-policy', text: '반품 및 환불 정책' },
      { id: 'intellectual-property', text: '지적 재산권 정책' },
      { id: 'shipping-info', text: '배송 정보' },
      { id: 'report-activity', text: '의심스러운 활동 신고하기' },
    ],
  },

  HELP: {
    title: '도움말',
    items: [
      { id: 'customer-faq', text: '고객센터 및 FAQ' },
      { id: 'safety-center', text: '안전 센터' },
      { id: 'purchase-protection', text: 'Temu 구매 보호' },
      { id: 'partnership', text: 'Temu와 제휴하기' },
    ],
  },
};

export const APP_DOWNLOAD = {
  title: 'Temu 앱 다운로드',
  itemsLeft: [
    { id: 'price-alert', text: '가격 인하 알림', icon: Icons.IcGraph },
    { id: 'secure-payment', text: '더 빠르고 안전한 결제', icon: Icons.IcShieldWhite },
    { id: 'exclusive-benefits', text: '독점 혜택', icon: Icons.IcBoonWhite },
  ],
  itemsRight: [
    { id: 'realtime-tracking', text: '실시간 주문 추적', icon: Icons.IcTruckWhite },
    { id: 'stock-alert', text: '재고 부족 상품 알림', icon: Icons.IcHourGlass },
    { id: 'coupon-alert', text: '쿠폰 및 혜택 알림', icon: Icons.IcCoupon },
  ],

  appStoreLinks: [
    { id: 'ios', text: '여기서 다운로드', subText: 'App Store', icon: Icons.IcApple },
    { id: 'android', text: '여기서 다운로드', subText: 'Google Play', icon: Icons.IcGoogle },
  ],

  socialLinks: {
    title: 'Temu와 연락하기',
    items: [
      { id: 'instagram', icon: Icons.IcInstagram },
      { id: 'facebook', icon: Icons.IcfaceBook },
      { id: 'x', icon: Icons.IcFooterX },
      { id: 'tiktok', icon: Icons.IcTikTok },
      { id: 'youtube', icon: Icons.IcYoutube },
      { id: 'pinterest', icon: Icons.IcPinterest },
    ],
  },
};

export const FOOTER_MID_SECTION = {
  left_info: {
    title: '사업자 정보. 고지사항',
    content: [
      { id: 'company', text: '업체명: Elementary Innovation Pte. Ltd.' },
      { id: 'address', text: '주소: 6 Raffles Quay, #14-06, Singapore (048580) | 대표자: Qin Sun' },
      { id: 'registration', text: '사업자등록번호: 201900304D | 전화번호: +65 6717 3228' },
      { id: 'report', text: '온라인 소매업체 보고서: 2025-공정-0013' },
      { id: 'link', text: '사업자 정보 확인 링크', underline: true, icon: Icons.IcArrowRightWhite },
    ],
  },

  right_info: [
    {
      id: 1,
      text: 'Temu는 고객님이 현금 결제한 금액에 대해 씨티은행(Citibank)과 지급 보증 계약을 체결하여 안전한 거래를 보장하고 있습니다. 단,신용 카드 거래에는 적용되지 않습니다.',
    },
    { id: 2, text: '서비스 가입사실 확인 링크', underline: true, icon: true },
    {
      id: 3,
      text: '문의 사항이 있거나 분쟁이 필요한 경우',
    },
    { id: 4, text: '고객서비스', underline: true, icon: true },
    { id: 5, text: ' 또는 Dispute@temu.com으로 문의하시기 바랍니다. ' },
    {
      id: 6,
      text: '호스팅 서비스 제공: Microsoft Azure ',
    },
    {
      id: 7,
      text: 'Temu는 통신판매중개자이며 통신판매당사자가 아닙니다. 따라서 Temu는 상품.거래 정보 및 거래 등에대하여 책임을 지지 않습니다. Temu는 고객의 권리와 이익을 보호하기 위해 무료 반품, 배송 보장, 가격조정 정책을 포함하되 이에 국한되지 않는 서비스를 제공합니다.',
    },
  ],
};

export const FOOTER_BOTTOM_SECTIONS = [
  { id: 1, text: '이용 약관', underline: true },
  { id: 2, text: '개인 정보 보호 정책', underline: true },
  { id: 3, text: '개인 정보 보호 선택', underline: true, icon: true },
  { id: 4, text: '광고 선택', underline: true },
];
