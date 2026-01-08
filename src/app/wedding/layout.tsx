import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "邱忠辉 & 张欢欣 - 婚礼邀请",
  description: "诚挚邀请您参加我们的婚礼，2026年2月23日（正月初七），湖南省石门县邱家湾",
};

export default function WeddingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

