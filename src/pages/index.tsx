'use client';
import { useState } from "react";
import Features from "@src/components/features";
import Container from "@src/components/global/container";
import Newsletter from "@src/components/newsletter";
import Testimonials from "@src/components/testimonials";
import Values from "@src/components/values";
import Image from "next/image";
import banner from '@public/medias/barcode-banner-en.png';
import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";
import Layout from "@src/components/global/layout";
import HeroVideo from "@src/components/banner";

export default function Home() {
  const [hasCode, setHasCode] = useState(false);
  const [code, setCode] = useState("GOP");

  const correctCode = "GOP";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code === correctCode) {
      setHasCode(true);
    } else {
      alert("Incorrect code, please try again.");
    }
  };

  return (
    <Container delay={0.4}>
      {!hasCode ? (
        <div className="w-full h-screen flex items-center justify-center bg-[#000] absolute top-0 left-0">
          <div>
            <Image
              className="m-auto"
              src={banner}
              alt="Next.js logo"
              priority
              />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs mx-auto"
              >
              <Input
                required
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your code"
                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                />
              <Button type="submit" size="sm" variant="default" className="w-full h-10 md:w-max">
                Enter
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <Layout>
          <HeroVideo/>
          <Values />
          <Features />
          <Testimonials />
          <Newsletter />
        </Layout>
      )}
    </Container>
  );
}
