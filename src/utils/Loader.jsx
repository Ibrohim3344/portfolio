import React from 'react';

const Loader = () => {
    return (
        <div className="h-screen font-nun flex flex-col-reverse justify-center items-center bg-gray-100 gap-[20px]">
            <h1 className="text-4xl mb-6 font-semibold text-gray-800">Loading...</h1>
            <div className="w-16 h-16 border-4 border-gray border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;
