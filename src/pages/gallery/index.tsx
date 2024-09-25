'use client'
import Gallery from '@src/components/gallery'
import Container from '@src/components/global/container'
import Layout from '@src/components/global/layout'
import React from 'react'

const Index = () => {
  return (
    <Container>
      <Layout contentPadding={'md'} >
        <Gallery/>
      </Layout>
    </Container>
  )
}

export default Index