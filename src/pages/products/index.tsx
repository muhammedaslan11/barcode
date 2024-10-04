'use client'
import Container from '@src/components/global/container'
import Layout from '@src/components/global/layout'
import Loader from '@src/components/global/loader'
import { Button } from '@src/components/ui/button'
import Card from '@src/components/ui/card'
import { db } from '@src/lib/db'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { DynamicIcon } from './../../components/global/icons';
import { ScaleLoader } from 'react-spinners'

const Index = () => {
  const router = useRouter();
  
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [resultList, setResultList] = useState<any>();
  const [categories, setCategories] = useState<any>();

  const genderOptions = [
    { value: '', label: 'All Gender' },
    { value: 'Men', label: 'Men' },
    { value: 'Women', label: 'Women' }
  ];
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setSelectedGender(params.get('Gender') || '');
      setSelectedCategory(params.get('Category') || '');
    }
  }, []);

  const updateUrlParams = (gender: string, category: string) => {
    const params = new URLSearchParams();
    if (gender) params.set('Gender', gender);
    if (category) params.set('Category', category);
    
    router.push(`?${params.toString()}`);
  };

  const handleReset = () => {
    setSelectedGender('');
    setSelectedCategory('');
    updateUrlParams('', '');
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const genderFilter = selectedGender ? `gender_type_string = '${selectedGender}'` : '';
        const categoryFilter = selectedCategory ? `category_string = '${selectedCategory}'` : '';
        const filter = [genderFilter, categoryFilter].filter(Boolean).join(' && ');
        
        const [productsResult, categoriesData] = await Promise.all([
          db.collection('Barcode_Products').getList(1, 50, {
            filter: filter ? filter : "",
            sort: 'order'
          }),
          db.collection('Barcode_Category').getList(1, 50, {})
        ]);

        const allCategories = [{ Category_Name: 'All Category' }, ...categoriesData.items];
        setResultList(productsResult);
        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedGender, selectedCategory]);

  return (
    <Container>
      <Layout loader={true} contentPadding='sm'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-2 py-7 px-4'>
            <div className='filters flex flex-row gap-2 items-center h-12'>
              <Button>
                <DynamicIcon iconName="filter" size={30} color="#fff" />
              </Button>
              <div className='flex flex-row gap-2 items-center h-12'>
                <div className='flex flex-col relative'>
                  {loading && <ScaleLoader className='absolute top-0 w-full bg-black' color='#fff' />}
                  <select
                    id="gender"
                    value={selectedGender}
                    onChange={(e) => {
                      setSelectedGender(e.target.value);
                      updateUrlParams(e.target.value, selectedCategory);
                    }}
                    className='p-2 outline-none border bg-black text-white border-gray-300 cursor-pointer'
                  >
                    {genderOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col relative'>
                  {loading && <ScaleLoader className='absolute top-0 w-full bg-black' color='#fff' />}
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      updateUrlParams(selectedGender, e.target.value);
                    }}
                    className='p-2 outline-none border bg-black text-white border-gray-300 cursor-pointer'
                  >
                    {categories && categories.map((category: any) => (
                      <option key={category.id} value={category.Category_Name}>
                        {category.Category_Name}
                      </option>
                    ))}
                  </select>
                </div>
                <Button variant={'link'} onClick={handleReset}>Reset</Button>
              </div>
            </div>
              <div className='count flex flex-row items-center text-xl'>{loading ? <ScaleLoader color='#fff' /> : `${resultList && resultList.totalItems && resultList.totalItems} Product`}</div>
          </div>
        {loading ? <Loader hideLayout={false} /> : (<>
          {/* Datas */}
          <div className='py-7 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {resultList && resultList.items && resultList.items.map((item: any, index: number) => (
              <Card
                key={index}
                imageUrl={item.img_url_string}
                link={item.id}
                flag={item.gender_type_string}
                name={item.title}
                subtitle={item.category_string}
              />
            ))}
          </div>
        </>)}
      </Layout>
    </Container>
  );
};

export default Index;
