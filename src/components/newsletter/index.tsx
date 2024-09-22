'use client'
import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { LampContainer } from "../ui/lamp";

const Newsletter = () => {
    return (
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <Container>
                <LampContainer>
                    <div className="flex flex-col items-center justify-center relative w-full text-center">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                            Barcode Professional <br /> By Regulus Cosmetics
                        </h2>
                        <p className="text-muted-foreground mt-6 max-w-md mx-auto">Focused on Development and With Our Love for Quality, We Try to Offer You the Best at the Most Affordable Price</p>
                        <Button variant="white" className="mt-6" asChild>
                            <Link href="/products">
                                Discover Products
                            </Link>
                        </Button>
                    </div>
                </LampContainer>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h4 className="text-xl md:text-2xl font-semibold">
                            Join our newsletter
                        </h4>
                        <p className="text-base text-muted-foreground">
                            Be up to date with everything about AI builder
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                        <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                            <Input
                                required
                                type="email"
                                placeholder="Enter your email"
                                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                            />
                            <Button type="submit" size="sm" variant="secondary" className="w-full h-10 md:w-max">
                                Subscribe
                            </Button>
                        </form>
                        <p className="text-xs text-muted-foreground">
                            By subscribing you agree with our{" "}
                            <Link href="/policies">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default Newsletter;
