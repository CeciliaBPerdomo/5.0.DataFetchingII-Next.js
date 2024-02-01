import React from 'react';

const Boton = ({ children, className = "", ... args }) => {
    return (
        <div>
            <button className={`rounded-xl py-2 px-3 bg-blue-400 text-center text-white ${className}`} {...args}>
                {children}
            </button>
        </div>
    )
}

export default Boton