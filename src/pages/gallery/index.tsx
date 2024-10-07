'use client'
import React from 'react'
import Gallery from '@src/components/gallery'
import Container from '@src/components/global/container'
import Layout from '@src/components/global/layout'
import { db } from '@src/lib/db'
import { GalleryItem, ListResponse } from '@src/lib/types'

const Index = (props: ListResponse<GalleryItem>) => {
  return (
    <Container>
      <Layout contentPadding={'md'} >
        <Gallery data={props.items} />
      </Layout>
    </Container>
  )
}

export default Index

export const getServerSideProps = async () => {
  const result: ListResponse<GalleryItem> = await db.collection('Barcode_Medias').getList(1, 50, {
    filter: 'is_gallery = true',
  });
  return {
    props: result
  }
}