import React from 'react'
import Container from '../global/container'
import { SectionBadge } from '../ui/sectionBadge'
import { DynamicIcon } from '../global/icons'

const Adress = () => {
    return (
        <Container reverse className='h-[600px] md:h-[500px] bg-black' >
            <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 p-8">
                    <iframe
                        src="https://maps.google.com/maps?q=bili%C5%9Fim%20vadisi%20%20istaanbul&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                        frameBorder="0"
                        scrolling="no"
                        className="w-full h-full min-h-52"
                        allowFullScreen
                        style={{ filter: 'grayscale(100%) invert(94%) contrast(94%)'}}
                    ></iframe>
                </div>
                <div className="w-full md:w-1/2 md:h-full flex flex-col gap-4 justify-center p-8 border-l-2">
                    <SectionBadge title='Address Information' />
                    <div className='flex flex-col gap-2'><div className='flex flex-row gap-2 items-cente' >
                        <DynamicIcon iconName='location' color='#fff' /><p className="">Bilişim Vadisi, İstanbul</p>
                    </div>
                        <div className='flex flex-row gap-2 items-center' >
                            <DynamicIcon iconName='usercircle' color='#fff' /><p>Kaan Ünal</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row gap-2 items-center' >
                            <DynamicIcon iconName='phone' color='#fff' /><a href='tel:+905324110664' className="">+90 532 411 06 64</a>
                        </div>
                        <div className='flex flex-row gap-2 items-center' >
                            <DynamicIcon iconName='mail' color='#fff' /><a href='mailto:info@reguluscosmetics.com' className="">info@reguluscosmetics.com</a>
                        </div>
                        <div className='flex flex-row gap-2 items-center' >
                        <DynamicIcon iconName='mail' color='#fff' /><a href='mailto:sales@barcodecosmetics.com' className="">sales@barcodecosmetics.com</a>     
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Adress
