import React, { useEffect, useState } from 'react';
import Fancybox from '../fancybox';
import { db } from '@src/lib/db';
import { RecordModel as PocketBaseRecordModel } from 'pocketbase'; // PocketBase'in dönen modeli
import Image from 'next/image';

// Bizim için gerekli olan arayüz
interface RecordModel {
  id: string;
  field: string; // Bu alanın PocketBase'den geldiğinden emin ol
  alt?: string;
}

const Gallery = () => {
  const [resultList, setResultList] = useState<RecordModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db.collection('Barcode_Medias').getList(1, 50, {
          filter: 'is_gallery = true',
        });
        const formattedResult = result.items.map((item: PocketBaseRecordModel) => ({
          id: item.id,
          field: item.field || '',
          alt: item.alt || '', 
        }));

        setResultList(formattedResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fancybox>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resultList.map((item, index) => (
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
              layout="responsive" 
              width={500} 
              height={300}
              className="object-cover"
            />
          </a>
        ))}
      </div>
    </Fancybox>
  );
};

export default Gallery;
