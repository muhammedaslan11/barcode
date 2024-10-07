'use client';
import { useEffect, useState } from "react";
import Process from "@src/components/process";
import Container from "@src/components/global/container";
import Newsletter from "@src/components/newsletter";
import Testimonials from "@src/components/testimonials";
import Values from "@src/components/values";
import Layout from "@src/components/global/layout";
import HeroVideo from "@src/components/banner";
import Lamp from "@src/components/lamp";
import Loader from "@src/components/global/loader";
import React from "react";
import ImageSwiper from "@src/components/image-swiper";
import CardSwiper from "@src/components/card-slider";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setLoading(false);
    }
    const handleBeforeUnload = () => {
      localStorage.removeItem('hasVisited');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  return (
    <>
      {loading ? <Loader hideLayout={true} /> : (
        <Container delay={0.4}>
          <Layout contentPadding={'none'}>
            <HeroVideo />
            <CardSwiper />
            <ImageSwiper />
            <Lamp />
            <Values />
            <Process />
            <Testimonials />
            <Newsletter />
          </Layout>
        </Container>
      )}
    </>
  );
}
