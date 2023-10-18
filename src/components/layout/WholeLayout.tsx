"use client";

import React from "react";
import Footer from "../UI/footer";
import { usePathname } from "next/navigation";
import { NavBar } from "./Navbar";

const WholeLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes("/dashboard") && <NavBar />}
      {children}
      {!pathname.includes("/dashboard") && <Footer />}
    </>
  );
};

export default WholeLayout;
