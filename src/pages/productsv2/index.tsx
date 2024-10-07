'use client';
import Container from '@src/components/global/container';
import Layout from '@src/components/global/layout';
import Loader from '@src/components/global/loader';
import { Button } from '@src/components/ui/button';
import Card from '@src/components/ui/card';
import { db } from '@src/lib/db';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DynamicIcon } from '@src/components/global/icons';
import Modal from '@src/components/ui/modal';
import { ScaleLoader } from "react-spinners";

const Index = () => {
  const router = useRouter();

  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(true);
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
  }, [selectedCategory, selectedGender]);
  


  const handleSelect = (type: string, value: string) => {
    if (type === 'gender') {
      setSelectedGender(value);
    } else if (type === 'category') {
      setSelectedCategory(value);
    }

    updateUrlParams(type === 'gender' ? value : selectedGender, type === 'category' ? value : selectedCategory);
    setModalVisible(false)
  };
  const handleReset = () => {
    setSelectedGender('');
    setSelectedCategory('');
    updateUrlParams('', '');
    setModalVisible(true)
  };
  return (
    <Container>
      <Layout loader={true} contentPadding='sm'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-2 py-7 px-4'>
            <div className='filters flex flex-row gap-2 items-center h-12'>
              <Button onClick={() => setModalVisible(true)}>
                <DynamicIcon iconName="filter" size={30} color="#fff" />
              </Button>
              <div className='flex flex-row gap-2 items-center h-12'>
                <div className='flex flex-col'>
                  <select
                    disabled
                    id="gender"
                    value={selectedGender}
                    onChange={(e) => handleSelect('gender', e.target.value)}
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
                    onChange={(e) => handleSelect('category', e.target.value)}
                    className='p-2 outline-none border bg-black text-white border-gray-300 cursor-pointer'
                  >
                    {categories && categories.map((category: any) => (
                      <option key={category.id} value={category.Category_Name}>
                        {category.Category_Name}
                      </option>
                    ))}
                  </select>
                </div>
                  <Button disabled={loading} variant={'link'} onClick={handleReset}>Reset</Button>
              </div>
            </div>
            <div className='count flex flex-row items-center text-xl'>{loading ? <ScaleLoader color='#fff' /> : `${resultList && resultList.totalItems && resultList.totalItems} Product`}</div>
          </div>
        {loading ? <Loader hideLayout={false} /> : (<>
          <Modal open={modalVisible} onClose={() => setModalVisible(false)}>
            <div className="category_filters flex flex-col items-center text-center gap-2">
              <div className='title'>Choose a Category</div>
              <div className="genders flex flex-row items-center gap-4">
                <Button
                  variant={'link'}
                  className={`flex flex-col gap-1 items-center cursor-pointer md:h-64 ${selectedGender === 'Men' ? 'border-2 border-white' : ''}`}
                  onClick={() => handleSelect('gender', 'Men')}
                >
                  <picture>
                    <img src='https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/vis74o7rzh8dgjy/barcode_men_category_tAd6WOQBhC.png'
                    width={200}
                    height={200}
                    alt="Men Category"
                    className="min-w-28 min-h-28" />
                  </picture>
                  <div>MEN</div>
                </Button>
                <Button
                  variant={'link'}
                  className={`flex flex-col gap-1 items-center cursor-pointer h-64 ${selectedGender === 'Women' ? 'border-2 border-white' : ''}`}
                  onClick={() => handleSelect('gender', 'Women')}
                >
                   <picture>
                    <img src='https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/l03zlm1n9fk8mmg/barcode_women_category_0WF2HCceoU.png'
                    width={200}
                    height={200}
                    alt="Women Category"
                    className="min-w-28 min-h-28" />
                  </picture>
                  <div>WOMEN</div>
                </Button>
              </div>
            </div>
          </Modal>
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
