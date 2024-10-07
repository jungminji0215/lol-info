"use client";

import Link from "next/link";
import React, { useState } from "react";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="lg:hidden block px-10">
        <div className="flex justify-end">
          <button onClick={toggleMenu}>메뉴</button>
        </div>

        <div className={isMenuOpen ? "block" : "hidden"}>
          <nav className="flex flex-col items-center gap-5">
            <Link href={"/"}>
              <button onClick={toggleMenu}>홈</button>
            </Link>

            <Link href={"/champions"}>
              <button onClick={toggleMenu}>챔피언 목록</button>
            </Link>

            <Link href={"/items"}>
              <button onClick={toggleMenu}>아이템 목록</button>
            </Link>

            <Link href={"/rotation"}>
              <button onClick={toggleMenu}>챔피언 로테이션</button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
