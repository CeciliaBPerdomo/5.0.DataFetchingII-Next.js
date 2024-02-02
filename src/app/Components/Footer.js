import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <br />
            <br />
            <footer className="w-full bg-blue-300 border-t border-blue-600">
                <div className='container m-auto py-6 text-sm text-black flex justify-between items-center'>
                    <p>Desarrollado por <b>Cecilia Perdomo</b> 💛</p>

                    <div className='flex items-center gap-2'>
                        <p className='text-black'>Powered by</p>
                        <Image
                            src={"/next.svg"}
                            alt={"Logo"}
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
                <hr />
            </footer>
        </>
    )
}

export default Footer;