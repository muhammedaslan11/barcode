import React, { useEffect, useState } from 'react';
import Fancybox from '../fancybox';
import { db } from '@src/lib/db';
import Image from 'next/image';
import Loader from '../global/loader';

const Gallery = () => {
  const [resultList, setResultList] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db.collection('Barcode_Medias').getList(1, 50, {
          filter: 'is_gallery = true',
        });
        setResultList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? <Loader /> : (
        <Fancybox>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resultList && resultList.items && resultList.items.map((item: any, index: number) => (
              <a
                key={item.id}
                data-fancybox="gallery"
                href={`https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/${item.id}/${item.field}`}
                className={`overflow-hidden ${index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
              >
                <Image
                  src={`https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/${item.id}/${item.field}`}
                  alt={item.alt || 'Gallery Image'}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </Fancybox>
      )}
    </>
  );
};

export default Gallery;
