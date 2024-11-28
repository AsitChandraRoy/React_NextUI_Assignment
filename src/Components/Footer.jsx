import React from 'react'

function Footer() {
  return (
    <>
        <footer className='sm:flex justify-between items-center text-center bg-[#07292f] p-7 mx-auto px-14'>
            <div className='flex justify-center items-center'>
                <img src="Logo.png" alt="" />
            </div>
            <p className='text-[16px] font-light mt-3 sm:mt-0'>Copyright © 2023 Wizia. All rights reserved.</p>
        </footer>
    </>
  )
}

export default Footer