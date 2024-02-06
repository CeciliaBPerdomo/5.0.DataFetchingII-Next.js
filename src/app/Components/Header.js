"use client"
import Image from 'next/image';                 // Imagenes
import React from 'react';                      // React 
import Link from 'next/link';                   // Link
import { usePathname } from 'next/navigation';  // Links activos
import CartWidget from './CartWidget';


const Header = () => {

    const links = [
        {
            label: "Inicio",
            href: "/"
        },

        {
            label: "Productos",
            href: "/productos/todos"
        },

        {
            label: "Posts", 
            href: "/posts"
        
        },

        {
            label: "Nosotros",
            href: "/nosotros"
        },

        {
            label: "Contacto",
            href: "/contacto"
        }, 


    ]

    const pathname = usePathname()

    // w-full: ocupa todo el ancho
    // py-6: padding en el eje y de 6
    return (
        <div>
            <header className="w-full py-6 bg-blue-300 border-b border-blue-600">
                <div className='container m-auto flex justify-between items-center'>
                    <p className='text-4xl text-bold text-slate-100'>
                        <Link href={"/"}>
                            <Image
                                src={"/next.svg"}
                                alt="CoderHouse-Logo"
                                width={100}
                                height={200}
                            />
                            </Link>
                    </p>
                    <nav className='flex justify-between gap-2'>
                        {links.map(link => {
                             return(
                                <Link
                                key = {link.label}
                                href={link.href}
                                // queda en negrita cuando esta activo el link
                                className={`${pathname === link.href ? 'font-bold': ''} text-base text-slate-100 p-3`}
                                >
                                    {link.label}
                                </Link>
                             )
                        })}
                        <CartWidget />
                    </nav>
                </div>
            </header>
            <br />
        </div>
    )
}

export default Header