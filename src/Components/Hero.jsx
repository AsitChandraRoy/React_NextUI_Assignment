import React from 'react'
import { Button,Link } from '@nextui-org/react'

function HeroSection() {
  return (
    <>
        <div className='max-w-full'>
            <img className='absolute w-[100%] sm:h-[450px] ' src="Img.png" alt="" />
        </div>
        <section className='mx-auto p-14 font-montserrat sm:text-start text-center'>
            <div className='relative'>
            <h4 className='text-primary-500 font-light'>AI SDRs (aiDRs)</h4>
            <h1 className='sm:text-[64px] font-bold py-0 sm:py-5 text-3xl'>More <i>leads,</i></h1>
            <h1 className='sm:text-[64px] font-bold py-0 sm:py-5 text-3xl'>less <i>people.</i></h1>
            <p className='text-sm sm:text-[20px] font-light sm:w-[490px] font-work mt-3'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <Button as={Link} className="bg-primary-500 mt-5 font-work text-xs sm:text-small w-64 sm:w-48" radius="full">
            Sign Up for the Beta
            <img className='w-4 sm:w-7' src="arrow.png" alt="" />
            </Button>
            </div>
        </section>
    </>
  )
}

export default HeroSection