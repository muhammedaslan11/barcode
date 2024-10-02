'use client'
import React, { useState } from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { db } from "@src/lib/db";
import toast, { Toaster } from "react-hot-toast";
import { ScaleLoader } from 'react-spinners'

const Newsletter = ({ }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const existingRecords = await db.collection('Barcode_Subscribers').getFullList({
                filter: `mail = "${email}"`,
                sort: '-created',
            });

            if (existingRecords.length > 0) {
                toast.error("This email is already subscribed.", {
                    icon: '❗',
                    duration: 5000,
                    style: {
                        borderRadius: '10px',
                        background: '#000',
                        color: '#fff',
                        border: '1px solid'
                    },
                });
            } else {
                const data = { "mail": email };
                await db.collection('Barcode_Subscribers').create(data);
                toast.success("Subscribed successfully!", {
                    icon: '🆗',
                    duration: 5000,
                    style: {
                        borderRadius: '10px',
                        background: '#000',
                        color: '#fff',
                        border: '1px solid'
                    },
                });
                setEmail("");
            }
        } catch (error) {
            console.error("Subscription failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <Container>
                <Toaster position={'top-center'} />
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
                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                            <Input
                                required
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                            />
                            <Button type="submit" size="sm" variant="secondary" className="min-w-24 w-full h-10 md:w-max" disabled={loading}>
                                {loading ? <ScaleLoader color='#fff' /> : "Subscribe"}
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
