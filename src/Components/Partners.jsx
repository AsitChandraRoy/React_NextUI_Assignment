import React from 'react'

function PartnerSection() {
  return (
    <>
        <section className='bg-[#07292f] py-8 text-center mt-0 sm:mt-16'>
            <h4 className='text-xs sm:text-[16px] text-[#0ff1f6] font-montserrat'>OUR TRUSTED PARTNERS</h4>
            <div className='flex justify-center items-center'>
            <div className='sm:flex grid grid-cols-12 gap-7 mt-5'>
                <img className='col-span-6' src="backHub.png" alt="" />
                <img className='col-span-6' src="cableLabs.png" alt="" />
                <img className='col-span-6 -mt-8 sm:mt-0' src="bds.png" alt="" />
                <img className='col-span-6 -mt-8 sm:mt-0' src="easyEuro.png" alt="" />
                <div className='col-span-12 flex justify-center'>
                <img className='col-span-12 -mt-8 sm:mt-0' src="amd.png" alt="" />
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default PartnerSection