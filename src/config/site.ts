export const siteConfig = {
  title: "Yongjin Company",
  description: "아티스트 유백(UBACK) 소개, 믹싱·마스터링, 앨범 구매",
  motto: "UBACK",
  links: [
    { name: "홈", url: "/" },
    { name: "샵", url: "/shop" },
    { name: "믹싱·마스터링", url: "/#mixing" },
    { name: "연락처", url: "/#contact" },
  ],
  contact: {
    email: "yongjinlee0222@gmail.com",
    label: "문의하기",
  },
  copyright: "© 2026 유백 (UBACK)",
  // SNS 링크 (비워두면 푸터에서 링크 비표시)
  social: {
    instagram: "https://www.instagram.com/uback5222/",
    youtube: "https://www.youtube.com/@%EC%9C%A0%EB%B0%B1-UBACK",
  },
  // 계좌 이체 입금 안내용 (환경 변수로 오버라이드 가능)
  bank: {
    bankName: "은행명",
    accountNumber: "000-000000-00-000",
    holder: "예금주",
    depositDeadlineDays: 3,
  },
} as const;
