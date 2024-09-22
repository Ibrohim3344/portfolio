import React from 'react'

const Btn = ({Text}) => {
    return (
        <button className="relative text-xl px-[10px] py-[5px] border-2 font-semibold border-transparent dark:text-oq text-qora group">
            <span className="relative z-10">{Text}</span>
            <span className="absolute inset-0 border-l-2 border-r-2 group-hover:border-none transition-all duration-300 ease-in-out"></span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] dark:bg-oq bg-qora  group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </button>
    )
}

export default Btn