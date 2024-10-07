import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Container from '../global/container';
import { SectionBadge } from '../ui/sectionBadge';
import Link from 'next/link';
import { db } from '@src/lib/db';

const ImageSwiper: React.FC = () => {
    const [width, setWidth] = useState<number>(1024);
    const [datas, setDatas] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await db.collection('Barcode_Medias').getList(1, 50, {
                    filter: 'is_gallery = true',
                });
                setDatas(result.items);
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
        <Container className='my-4'>
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
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {datas.length > 0 ? (
                    datas.map((item, index) => (
                        <SwiperSlide key={index}>
                            <picture>
                                <img
                                    src={`https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/${item.id}/${item.field}`}
                                    alt={item.alt || 'Gallery Image'}
                                    className="w-[500px] h-[500px] object-cover"
                                />
                            </picture>
                        </SwiperSlide>
                    ))
                ) : (
                    <div>No images available</div>
                )}
            </Swiper>
        </Container>
    );
};

export default ImageSwiper;
