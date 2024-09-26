import React from 'react'
import Container from './container'
import { BounceLoader } from 'react-spinners'

const Loader = () => {
  return (
    <Container className='loader-container h-96 flex items-center justify-center relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center'>
        <BounceLoader color='#fff' />
      </div>
    </Container>
  )
}

export default Loader
