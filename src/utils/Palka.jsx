import React from 'react';

const CustomIcon = () => {
    return (
        <div className="icon-container">
            {/* Thin Stick SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 3"
                fill="currentColor"
                className="w-full h-auto text-black dark:text-white"
            >
                <rect x="0" y="0" width="400" height="2" />
            </svg>
        </div>
    );
};

export default CustomIcon;
