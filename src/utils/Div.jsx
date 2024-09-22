import React from 'react'

const Div = ({ text }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center border-4 font-bold dark:border-oq border-qora px-[10px] w-[200px] py-[10px]'>
                <h1 className='text-qora dark:text-oq'>{text}</h1>
            </div>
        </div>

    )
}

export default Div