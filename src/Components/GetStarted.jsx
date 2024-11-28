import { Button, Link } from '@nextui-org/react'
import React from 'react'

function GetStarted() {
  return (
    <>
        <section className='flex flex-col justify-center items-center p-12'>
            <h5 className='text-[16px] sm:text-[20px] text-[#0ff1f6]'>GET STARTED</h5>
            <div className='text-[36px] font-medium text-center sm:flex gap-3'><i>Embrace</i> <p className='text-[#ffffff] font-bold'>the new era of</p> <i>outbound.</i></div>
            <p className='text-[18px] sm:text-[20px] font-light text-center mt-4'>Wizia lets you train, activate, and optimize aiDRs. <br></br>
            Take your outbound to new levels of performance and efficiency.</p>
            <Button as={Link} className="bg-[#0ff1f6] mt-5 font-work text-xs sm:text-small w-64 sm:w-48" radius="full">
            Sign Up for the Beta
            <img className='w-4 sm:w-7' src="arrow.png" alt="" />
            </Button>
        </section>
    </>
  )
}

export default GetStarted