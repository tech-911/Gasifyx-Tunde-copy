import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gasifyx ",
  description:
    "Gasifyx is a gas monitoring and safety system designed to help users track their LPG usage, detect leaks, and make gas ordering more convenient.",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative w-full">{children}</div>;
}
