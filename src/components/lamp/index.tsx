import React from 'react'
import Container from '../global/container'
import { LampContainer } from '../ui/lamp'
import { Button } from '../ui/button'
import Link from 'next/link'

const Lamp = ({}) => {
  return (
    <Container>
    <LampContainer>
        <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                Barcode Professional <br /> By Regulus Cosmetics
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">Focused on Development and With Our Love for Quality, We Try to Offer You the Best at the Most Affordable Price</p>
            <Button variant="white" className="mt-6" asChild>
                <Link href="/products">
                    Discover Products
                </Link>
            </Button>
        </div>
    </LampContainer>
    </Container>
  )
}

export default Lamp