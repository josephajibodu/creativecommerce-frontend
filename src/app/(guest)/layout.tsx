import { MainFooter } from "@/components/main-footer";
import { MainNav } from "@/components/main-nav";

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <MainNav />
      {children}
      <MainFooter />
    </main>
  );
}
