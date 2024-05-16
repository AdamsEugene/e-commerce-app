// Home

import { Navbar } from "@/src/components/others/navbar";

import MainFooter from "@/src/components/others/MainFooter";

type PROPS = {
  children: Readonly<{
    children: React.ReactNode;
  }>;
};

export default function RootLayout({ children }: PROPS["children"]) {
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto">{children}</main>
      <MainFooter />
    </>
  );
}
