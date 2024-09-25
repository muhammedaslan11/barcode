import React from 'react'
import Container from '../global/container'
import { LampContainer } from '../ui/lamp'
import { Button } from '../ui/button'
import Link from 'next/link'
import { DynamicIcon } from '../global/icons'

const Lamp = ({}) => {
  return (
    <Container>
    <LampContainer>
        <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                Barcode Professional <br /> By Regulus Cosmetics
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">Focused on Development and With Our Love for Quality, We Try to Offer You the Best at the Most Affordable Price</p>
            <div>

            <Button variant="dark" className="p-2 m-2 md:m-6 md:text-lg" asChild>
                <Link href="/products">
                    Discover Products
                <DynamicIcon iconName="product" size={24} color="#fff" />
                </Link>
            </Button>
            <Button variant="dark" className="p-2 m-2 md:m-6 md:text-lg" asChild>
                <a target='_blank' href="https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/rtjgbs44ezdzm7b/barcode_catalog_b8gBOFEfdn.pdf">
                    Discover Catalog
                <DynamicIcon iconName="pdf" size={24} color="#fff" />
                </a>
            </Button>
            </div>
        </div>
    </LampContainer>
    </Container>
  )
}

export default Lamp