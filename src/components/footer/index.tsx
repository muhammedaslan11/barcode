'use client';
import Link from 'next/link';
import Container from '../global/container';
import { DynamicIcon } from '../global/icons';

const Footer = () => {
    const menuLinks = [
        { name: "About Us", link: "/about" },
        { name: "Gallery", link: "/gallery" },
        { name: "Catalog", link: "https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/rtjgbs44ezdzm7b/barcode_catalog_b8gBOFEfdn.pdf",target: '_blank' },
        { name: "Products", link: "/products" },
        { name: "Productsv2", link: "/productsv2" },
        { name: "Contact", link: "/contact" },
      ];

    const socialMediaLinks = [
        { name: "Facebook", link: "https://www.facebook.com" },
        { name: "Instagram", link: "https://www.instagram.com/" },
        { name: "Twitter", link: "https://x.com/" },
        { name: "LinkedIn", link: "https://linkedin.com/" },
    ];
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full lg:pt-32">
            <Container reverse>
                <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
                <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
                <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <Link href="/" className="flex items-center gap-2">
                            <picture>
                                <img  src='https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/lw86ar0fex59m5g/barcode_light_logo_w8HUYWOfcE.png'
                                alt="Logo"
                                width={80}
                                height={80}
                                className="object-contain" />
                            </picture>
                        </Link>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            Barcode Professional is a subsidiary of Regulus Cosmetics A.Ş.
                        </p>
                        <span className="mt-4 text-neutral-200 text-sm flex items-center">
                            Designed By <a className='underline mx-1' href="https://www.linkedin.com/in/muhammed-aslan11/">Muhammed</a> & <a className='underline mx-1' href="https://www.linkedin.com/in/ahmet-barut-17761b23a/">Ahmet</a>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-white border-b w-max">Site Map</h3>
                                <ul className="text-sm text-muted-foreground">
                                    {menuLinks.map((item: any, index: number) => (
                                        <li key={index} className="mt-2">
                                            <Link target={item.target ? item.target : ''} href={item.link} className="font-medium opacity-60 hover:opacity-100 transition-all">{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white border-b w-max">Social Media</h3>
                                <ul className="text-sm text-muted-foreground">
                                    {socialMediaLinks.map((item: any, index: number) => (
                                        <li key={index} className='mt-2'>
                                            <Link target='_blank' href={item.link} className="font-medium opacity-60 hover:opacity-100 transition-all">{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white border-b w-max">Policies</h3>
                                <ul className="text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/policies" className="font-medium opacity-60 hover:opacity-100 transition-all">Privacy Policy</Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/term-and-conditions" className="font-medium opacity-60 hover:opacity-100 transition-all">Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 flex items-center justify-between w-full">
                    <div className='flex flex-row gap-1 items-center'>
                        <DynamicIcon iconName="copyright" size={16} color="#fff" />
                        <p className="text-sm text-muted-foreground">
                            {new Date().getFullYear()} Regulus Cosmetics A.Ş All rights reserved.
                        </p>
                    </div>
                    <div onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}>
                        <DynamicIcon className='cursor-pointer' iconName="arrowupborder" size={50} color="#fff" />
                    </div>

                </div>
            </Container>
        </footer>
    );
};

export default Footer;
