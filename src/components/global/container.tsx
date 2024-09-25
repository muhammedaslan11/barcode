"use client";
import localFont from 'next/font/local';
import { motion } from "framer-motion";
import { cn } from '@src/lib/utils';

const geistSans = localFont({
  src: "../../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface Props {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
}

const Container = ({ children, className, delay = 0.3, reverse }: Props) => {
  return (
    <motion.div 
      className={cn("w-full h-auto mx-auto md:max-w-screen-2xl overflow-x-hidden", className, geistSans.variable, geistMono.variable)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};


export default Container;
