import React from 'react'

function Allocate() {
  return (
    <>
        <section className='bg-[#07292f] mx-auto rounded-xl'>
            <div className='absolute w-full'>
                <img className='w-full h-[105vh] sm:h-[41vh]' src="back3.png" alt="" />
            </div>
            <div className='mx-auto p-14 font-montserrat relative'>
                <h1 className='text[28px] sm:text[32px] font-semibold w-[40%] sm:w-[16%] text-[#ffffff]'>Allocate effort where your reps make an inpact.</h1>
                <i className='text[24px] sm:text[32px] font-medium text-[#0ff1f6]'>Let us handle the rest.</i>
                <p className='text[18px] sm:[20px] font-light mt-3 font-work  w-[60%] sm:w-[28%]'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
                <div className='grid grid-cols-12 mt-4 sm:mt-12 gap-4'>
                    <div className='col-span-12 sm:col-span-2'>
                        <h1 className='text-[#0ff1f6] font-bold text-[32px] sm:text-[40px] '>32%</h1>
                        <p className='text[18px] sm:[20px] font-medium sm:w-40'>Improvement in Open Rates</p>
                    </div>
                    <div className='col-span-12 sm:col-span-2'>
                        <h1 className='text-[#0ff1f6] font-bold text-[32px] sm:text-[40px] '>75%</h1>
                        <p className='text[18px] sm:[20px] font-medium sm:w-40'>Improvement in Ramp Time</p>
                    </div>
                    <div className='col-span-12 sm:col-span-2'>
                        <h1 className='text-[#0ff1f6] font-bold text-[32px] sm:text-[40px] '>35%</h1>
                        <p className='text[18px] sm:[20px] font-medium sm:w-40'>Improvement in Meetings Booked</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Allocate