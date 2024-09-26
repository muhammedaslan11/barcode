'use client'
import Container from '@src/components/global/container'
import Layout from '@src/components/global/layout'
import Loader from '@src/components/global/loader'
import Card from '@src/components/ui/card'
import { db } from '@src/lib/db'
import React, { useEffect, useState } from 'react'

const Index = () => {
  const [resultList, setResultList] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db.collection('Barcode_Products').getList(1, 50, {});
        setResultList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
console.log('datas',resultList)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Container>
      <Layout contentPadding='sm'>
        {loading ? <Loader /> : ( 
          <div className='py-7 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {resultList && resultList.items && resultList.items.map((item: any, index: number) => (
              <Card
                key={index}
                // imageUrl={`https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/${item.image}/${item.image}`}
                imageUrl={item.img_url_string}
                link={item.id}
                flag={item.gender_type_string}
                name={item.title}
                subtitle={item.category_string}
              />
            ))}
          </div>
        )}
      </Layout>
    </Container>
  )
}

export default Index