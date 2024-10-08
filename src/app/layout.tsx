import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvider";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "LOL Info",
  description: "Riot API 를 사용한 리그 오브 레전드 정보 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black	min-h-screen flex flex-col">
        <Providers>
          <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
            <div className="hidden lg:block">
              <nav className="flex justify-around ">
                <Link href={"/"}>홈</Link>
                <Link href={"/champions"}>챔피언 목록</Link>
                <Link href={"/items"}>아이템 목록</Link>
                <Link href={"/rotation"}>챔피언 로테이션</Link>
              </nav>
            </div>

            <MobileNav />
          </header>
          <main className="pt-28 grow">{children}</main>
          <footer className="bg-gray-800 p-4 mt-8 ">
            <div className="text-center text-white text-sm">
              <p>jungminji</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
