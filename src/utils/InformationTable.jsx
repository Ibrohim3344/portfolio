import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const InformationTable = ({ title, desc, aos }) => {

  useEffect(() => {

    AOS.init({
      duration: 500,
      offset: 100,
    });
  }, []);

  return (
    <div className='flex xl:justify-start py-[10px] px-[10px] justify-center xl:items-start bg-no-repeat items-center flex-col gap-[10px] w-[500px] bg-[url("/public/design.png")]' data-aos={aos}>
      <h1 className='text-qora dark:text-oq font-bold text-2xl'>{title}</h1>
      <p className='text-base text-qora dark:text-oq'>{desc}</p>
    </div>
  )
}

export default InformationTable