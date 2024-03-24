// Home

import { Navbar } from "@/src/components/navbar";

import MainFooter from "@/src/components/MainFooter";

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
