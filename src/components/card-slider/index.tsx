import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';
import { db } from '@src/lib/db';
import Container from '../global/container';
import { SectionBadge } from '../ui/sectionBadge';
import Link from 'next/link';
import Card from '../ui/card';

const CardSlider = () => {
    const [width, setWidth] = useState(1024);
    const [resultList, setResultList] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await db.collection('Barcode_Products').getList(1, 50, {});
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
                <Link href='/products'>
                    <SectionBadge title="Products" iconName='product' />
                </Link>
            </div>
            <Swiper
               spaceBetween={30}
               loop
               autoplay={{
                   delay: 750,
                   disableOnInteraction: false,
                   pauseOnMouseEnter: true,
                }}
                slidesPerView={width <= 640 ? 1 : 3}
               modules={[Pagination, Autoplay]}
                className="mySwiper">
                {resultList.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <Card
                            key={index}
                            // imageUrl={`https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/${item.image}/${item.image}`}
                            imageUrl={item.img_url_string}
                            link={item.id}
                            flag={item.gender_type_string}
                            name={item.title}
                            subtitle={item.category_string}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default CardSlider;
