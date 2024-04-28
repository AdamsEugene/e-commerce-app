import SideBar from "@/src/components/_shared/advertisement/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <SideBar />
      <div className="flex gap-8 flex-grow">{children}</div>
    </div>
  );
}
