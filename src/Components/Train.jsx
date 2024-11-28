import React from "react";

function TrainSection() {
  return (
    <>
      <section className="bg-[#07292f] py-12 sm:py-14 font-montserrat rounded-xl">
        <img className="absolute -mt-14 w-[100%] h-[380px]" src="back2.png" alt="" />
        <div className='grid grid-cols-12 relative'>
          <div className="col-span-1 sm:col-span-3"></div>
          <div className="px-3 mx-auto col-span-12 sm:col-span-9">
            <h2 className="text-[28px] sm:text-[40px] font-semibold">Train your aiDR on your...</h2>
            <i className="text-[28px]  text-[#0ff1f6] font-medium">prefered email st|</i>
            <p className="font-work mt-5 text-[18px] sm:text-2xl font-light">
              You’re in control. Train your aiDR on elements of your Marketing
              strategy.
            </p>
            <div className="grid grid-cols-12 text-primary">
              <div className="col-span-12 sm:col-span-6 flex justify-start items-center gap-2 mt-5">
                <img className="w-4" src="Group.png" alt="" />
                <p>Quick to ramp</p>
              </div>
              <div className="col-span-12 sm:col-span-6 flex justify-start items-center gap-2 mt-5">
                <img className="w-4" src="Group.png" alt="" />
                <p>Easy to optimize</p>
              </div>
              <div className="col-span-12 sm:col-span-6 flex justify-start items-center gap-2 mt-5">
                <img className="w-4" src="Group.png" alt="" />
                <p>Quick to scale up</p>
              </div>
              <div className="col-span-12 sm:col-span-6 flex justify-start items-center gap-2 mt-5">
                <img className="w-4" src="Group.png" alt="" />
                <p>Works with all your existing tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrainSection;
