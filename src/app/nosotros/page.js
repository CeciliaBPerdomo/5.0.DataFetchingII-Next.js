
'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import Boton from '../Components/Boton';

const Nosotros = () => {
  // Tiene que estar dentro de app
  // localhost:3000/nosotros

  const router = useRouter();

  return (
    <div>
      <main className='container m-auto'>
        <h1 className='text-4xl text-blue-600 text-bold my-4'>
          Bienvenido a la página "Nosotros"
        </h1>
        <hr />
        <p className='text-base mt-4'>
          Sitio en construcción
        </p>
        <Boton onClick={() => router.back()}>
          Volver
        </Boton>
      </main>

    </div>
  )
}

export default Nosotros

/*
Funciones de router

--> router.replace("")  --> Reemplaza por otra ruta especifica
--> router.refresh()    --> Refresca la pagina
--> router.foward()     --> Avanza en el flujo de navegacion
*/