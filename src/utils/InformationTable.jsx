import React from 'react'

const InformationTable = ({title, desc}) => {
  return (
    <div className='flex xl:justify-start py-[10px] px-[10px] justify-center xl:items-start bg-no-repeat items-center flex-col gap-[10px] w-[500px] bg-[url("/public/design.png")]'>
        <h1 className='text-qora dark:text-oq font-bold text-2xl'>{title}</h1>
        <p className='text-base text-qora dark:text-oq'>{desc}</p>
    </div>
  )
}

export default InformationTable