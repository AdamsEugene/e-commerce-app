type PROPS = {
  children: Readonly<{
    children: React.ReactNode;
  }>;
};

export default function RootLayout({ children }: PROPS["children"]) {
  return <main className="h-[100vh]">{children}</main>;
}
