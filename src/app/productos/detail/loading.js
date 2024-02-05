import React from 'react'
import Image from 'next/image';  

function Loading() {
    return (
        <div className='w-full h-full min-h-screen flex justify-center items-center'>
            <Image
                src={"/Logo.png"}
                alt={"Logo"}
                width={150}
                height={150}
                className="animate-pulse"
            />
        </div>
    )
}

export default Loading