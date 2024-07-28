import { SideBar } from "@/components/side-bar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <div className="flex flex-col w-full h-screen">{children}</div>
    </div>
  );
}
