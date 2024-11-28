import React from 'react'

function ControlScalableFlexible() {
  return (
    <>
        <section className='grid
        grid-cols-12 py-7 sm:py-20 px-4 sm:px-14 gap-8'>
            <div className='col-span-12 sm:col-span-4'>
                <img className='w-10 sm:w-14' src="control.png" alt="" />
                <h3 className='py-3 text-xl sm:text-[28px] font-montserrat font-semibold text-[#ffffff]'>You’re in Control</h3>
                <p className='font-work sm:text-[22px] text-sm mt-0 sm:mt-2 leading-5 sm:leading-8 font-light'>aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.</p>
            </div>
            <div className='col-span-12 sm:col-span-4'>
                <img className='w-10 sm:w-14' src="scalable.png" alt="" />
                <h3 className='py-3 text-xl sm:text-[28px] font-montserrat font-semibold text-[#ffffff]'>Infinitely Scalable</h3>
                <p className='font-work sm:text-[22px] text-sm mt-0 sm:mt-2 leading-5 sm:leading-8 font-light'>Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.</p>
            </div>
            <div className='col-span-12 sm:col-span-4'>
                <img className='w-10 sm:w-14' src="flexible.png" alt="" />
                <h3 className='py-3 text-xl sm:text-[28px] font-montserrat font-semibold text-[#ffffff]'>Incredibly Flexible</h3>
                <p className='font-work sm:text-[22px] text-sm mt-0 sm:mt-2 leading-5 sm:leading-8 font-light'>Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.</p>
            </div>
        </section>
    </>
  )
}

export default ControlScalableFlexible