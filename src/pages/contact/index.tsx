'use client'
import Adress from '@src/components/adress'
import Container from '@src/components/global/container'
import Layout from '@src/components/global/layout'
import Newsletter from '@src/components/newsletter'
import React from 'react'

const Index = () => {
  return (
    <Container>
      <Layout contentPadding={'sm'} >
        <Adress />
        <Newsletter />
      </Layout>
    </Container>
  )
}

export default Index