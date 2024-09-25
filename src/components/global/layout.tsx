// ./src/components/Layout.tsx
'use client';
import React from "react";
import Header from "@src/components/header";
import Footer from "@src/components/footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  contentPadding: 'sm' | 'md' | 'xl' | 'none';
}

const Layout: React.FC<LayoutProps> = ({ children, className, contentPadding }) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-8',
    xl: 'p-16',
    none: ''
  };

  return (
    <div className={className}>
      <Header />
      <main className={paddingClasses[contentPadding]}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
