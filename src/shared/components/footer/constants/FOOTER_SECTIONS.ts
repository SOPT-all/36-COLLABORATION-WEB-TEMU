export const FOOTER_SECTIONS = {
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
  APP_DOWNLOAD: {
    title: 'Temu 앱 다운로드',
    items: [
      { id: 'price-alert', text: '가격 인하 알림', svg: 'IcGraph' },
      { id: 'secure-payment', text: '더 빠르고 안전한 결제', svg: 'IcShieldWhite' },
      { id: 'exclusive-benefits', text: '독점 혜택', svg: 'IcBoonWhite' },
      { id: 'realtime-tracking', text: '실시간 주문 추적', svg: 'IcTruckWhite' },
      { id: 'stock-alert', text: '재고 부족 상품 알림', svg: 'IcHourGlass' },
      { id: 'coupon-alert', text: '쿠폰 및 혜택 알림', svg: 'IcCoupon' },
    ],

    appStoreLinks: [
      { id: 'ios', text: '여기서 다운로드', subText: 'App Store', svg: 'IcApple' },
      { id: 'android', text: '여기서 다운로드', subText: 'Google Play', svg: 'IcGoogle' },
    ],

    socialLinks: {
      title: 'Temu와 연락하기',
      items: [
        { id: 'instagram', svg: 'IcInstagram' },
        { id: 'facebook', svg: 'IcfaceBook' },
        { id: 'twitter', svg: 'IcFooterX' },
        { id: 'tiktok', svg: 'IcTikTok' },
        { id: 'youtube', svg: 'IcYoutube' },
        { id: 'pinterest', svg: 'IcPinterest' },
      ],
    },
  },
};
