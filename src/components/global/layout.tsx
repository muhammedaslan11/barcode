// ./src/components/Layout.tsx
'use client';
import React from "react";
import Header from "@src/components/header";
import Footer from "@src/components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
