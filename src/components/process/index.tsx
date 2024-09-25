'use client'
import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { DynamicIcon } from "../global/icons";
import { SectionBadge } from "../ui/sectionBadge";
import { process } from "@src/data";

const Process = () => {

    return (
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-gray-400 rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-gray-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
            <div className="max-w-md mx-auto text-start md:text-center">
                <SectionBadge title="Process" />
                <p className="text-muted-foreground mt-6"> Discover our work Process</p>
            </div>
        </Container>
        <Container>
            <div className="flex items-center justify-center mx-auto mt-8">
                <DynamicIcon iconName="powerful" size={100} color="#fff" />
            </div>
        </Container>
        <Container>
            <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                    {process.map((item) => (
                        <div key={item.title} className="flex flex-col items-start lg:items-start px-0 md:px-0">
                            <div className="flex items-center justify-center">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-medium mt-4">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                {item.info}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </Wrapper>
    );
};

export default Process;
