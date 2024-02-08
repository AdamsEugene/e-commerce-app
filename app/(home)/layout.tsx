// Home

import { Navbar } from "@/components/navbar";

import "./home.css";

type PROPS = {
  children: Readonly<{
    children: React.ReactNode;
  }>;
};

export default function RootLayout({ children }: PROPS["children"]) {
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto flex-grow">{children}</main>
    </>
  );
}
