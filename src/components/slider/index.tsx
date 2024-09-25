import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { db } from '@src/lib/db';
import Container from '../global/container';
import { SectionBadge } from '../ui/sectionBadge';
import Link from 'next/link';
import Image from 'next/image';

const Slider = () => {
    const [width, setWidth] = useState(1024);
    const [resultList, setResultList] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await db.collection('Barcode_Medias').getList(1, 50, {
                    filter: 'is_gallery = true',
                });
                setResultList(result.items);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container reverse className='py-7 px-4'>
            <div className="max-w-md mx-auto text-start md:text-center py-4">
                <Link href='/gallery'>
                    <SectionBadge title="Gallery" iconName='gallery' />
                </Link>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={width <= 640 ? 1 : 3}
                loop
                autoplay={{
                    delay: 750,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {resultList.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={`https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/${item.id}/${item.field}`}
                            alt={item.alt || 'Gallery Image'}
                            width={500}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default Slider;
