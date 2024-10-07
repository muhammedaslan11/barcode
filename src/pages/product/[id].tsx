import Container from '@src/components/global/container';
import Layout from '@src/components/global/layout';
import Loader from '@src/components/global/loader';
import { db } from '@src/lib/db';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { DynamicIcon } from './../../components/global/icons';

interface Product {
  id: string;
  title: string;
  slogan: string;
  category_string: string;
  gender_type_string: string;
  description: string;
  img_url_string: string;
  how_to_use: string;
}

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query as { id?: string };

  const cleanDescription = (description: string) => {
    return description
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/\n+/g, "\n")
      .trim();
  };
  const [productData, setProductData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      if (id) {
        try {
          const record = await db.collection('Barcode_Products').getOne(id as string, {});
          setProductData(record as unknown as Product);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      }
      setLoading(false);
    };

    fetchProductData();
  }, [id]);

  return (
    <Container>
      <Layout contentPadding={'md'}>
        {loading ? <Loader hideLayout={false} /> : (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              {productData ? (
                <picture>
                  <img
                    src={productData.img_url_string}
                    width={300}
                    height={300}
                    alt={productData.title}
                    className="w-full object-contain" />
                </picture>
              ) : <></>}
            </div>
            <div className="flex-1">
              <div className='flex flex-col gap-2 md:gap-0 md:flex-row md:items-center justify-between border-b'>
                {productData && productData.title && <h1 className="text-3xl font-bold mb-2">{productData.title}</h1>}
                {productData && productData.slogan && <div className="flex flex-row justify-center items-center border-l-2 px-2 border-r-2 mb-2 md:mb-0 text-white uppercase">{productData.slogan}</div>}
              </div>
              {productData && productData.gender_type_string && (
                <a href={`https://www.barcodecosmetics.com/products?Gender=${productData.gender_type_string}`} className="flex flex-row w-fit h-8 gap-1 items-center text-md font-semibold my-2 border rounded-md p-4">
                  {productData.gender_type_string === "Men" ? (<>Men <DynamicIcon iconName="male" size={15} color="#fff" /></>)
                    : productData.gender_type_string === "Women" ? (<>Women <DynamicIcon iconName="female" size={15} color="#fff" /></>)
                      : <>Men&Women <DynamicIcon iconName="male" size={15} color="#fff" /><DynamicIcon iconName="female" size={15} color="#fff" /></>}
                </a>
              )}
              {productData && productData.category_string && <div className="flex flex-rom gap-1 text-xl opacity-60 font-semibold mb-4"><DynamicIcon iconName="category" color="#fff" />{productData.category_string}</div>}
              {productData && productData.description && <p className="mb-4 text-white">{cleanDescription(productData.description)}</p>}
              {productData && productData.how_to_use && (
                <div className='mt-11'>
                  <div className='text-xl font-semibold'>How To Use:</div>
                  <p className="mb-4 text-white">{cleanDescription(productData.how_to_use)}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Layout>
    </Container>
  );
};

export default ProductDetail;
