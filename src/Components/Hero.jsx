import React from 'react'
import { Button,Link } from '@nextui-org/react'

function HeroSection() {
  return (
    <>
        <div className='max-w-full'>
            <img className='absolute w-[100%] h-[450px] ' src="Img.png" alt="" />
        </div>
        <section className='mx-auto p-14 font-montserrat'>
            <div className='relative'>
            <h4 className='text-[#0ff1f6] font-light'>AI SDRs (aiDRs)</h4>
            <h1 className='text-[64px] font-bold -mt-3'>More <i>leads,</i></h1>
            <h1 className='text-[64px] font-bold -mt-5'>less <i>people.</i></h1>
            <p className='text-[20px] font-light w-[490px] font-work'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <Button as={Link} className="bg-[#0ff1f6] mt-5 font-work" radius="full">
            Sign Up for the Beta
            <img src="arrow.png" alt="" />
            </Button>
            </div>
        </section>
    </>
  )
}

export default HeroSection