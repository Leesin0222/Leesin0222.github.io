export const siteConfig = {
  title: "yongjincompany",
  description: "이용진이 하고 싶은 것만 한다. yongjincompany 소개",
  motto: "이용진이 하고 싶은 것만 한다",
  links: [
    { name: "소개", url: "/#about" },
    { name: "활동", url: "/#activity" },
    { name: "연락처", url: "/#contact" },
  ],
  contact: {
    email: "example@yongjincompany.com",
    label: "문의하기 (예시)",
  },
  copyright: "© 2026 yongjincompany",
  activities: [
    {
      id: "uback",
      name: "유백 (UBACK)",
      description: "음악 아티스트로 활동 중입니다.",
      url: "#",
      ctaLabel: "들어가기",
      image: "/placeholder-card.svg",
    },
    {
      id: "uchat",
      name: "Uchat",
      description: "미연시 게임을 만들고 있습니다.",
      url: "#",
      ctaLabel: "자세히 보기",
      image: "/placeholder-card.svg",
    },
  ],
} as const;
