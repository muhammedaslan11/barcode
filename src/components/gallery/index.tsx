import React from 'react';
import Fancybox from '../fancybox';
import { GalleryItem } from '@src/lib/types';
type Props = { data: Array<GalleryItem> }

const Gallery = (props: Props) => {
  return (
    <>
      <Fancybox>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {props.data.map((item, index) => (
            <a
              key={item.id}
              data-fancybox="gallery"
              href={`https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/${item.id}/${item.field}`}
              className={`overflow-hidden ${index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
            >
              <picture>
                <img src={`https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/${item.id}/${item.field}`}
                  alt={item.alt || 'Gallery Image'}
                  className="w-full h-full object-cover"
                />
              </picture>
            </a>
          ))}
        </div>
      </Fancybox>
    </>
  );
};

export default Gallery;
