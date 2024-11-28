import React from 'react'

function CommentSection() {
  return (
    <>
        <section className='py-20 font-work'>
        <div className=' flex justify-center items-center'>
          <img className='w-12' src="comment.png" alt="" />
        </div>
        <div className='grid grid-cols-12 text-center'>
          <div className='col-span-1 sm:col-span-2 flex justify-center items-center'>
            <img className='sm:w-7 w-0' src="arrow2.png" alt="" />
          </div>
          <div className='col-span-10 sm:col-span-8 py-7'>
            <p className='text-[24px] sm:text[32px] font-light'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p className='pt-5 text-[18px] sm:text-2xl font-semibold text-primary'>John Doe</p>
            <p className=' text-[18px] sm:text-2xl font-semibold'>Chief Strategy Officer @ Company</p>
          </div>
          <div className='col-span-1 sm:col-span-2 flex justify-center items-center'>
            <img className='col-span-1 sm:col-span-2 sm:w-7 w-0' src="arrow3.png" alt="" />
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <div className='h-2 w-2 rounded-full bg-primary'></div>
            <div className='h-2 w-2 rounded-full bg-secondary'></div>
            <div className='h-2 w-2 rounded-full bg-secondary'></div>
          </div>
        </section>
    </>
  )
}

export default CommentSection
