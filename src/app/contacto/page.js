import React from 'react'
import ContactForm from '../Components/contacto/ContactForm'

const Contacto = () => {
    return (
        <div>
            <main className='container m-auto'>
                <h1 className='text-4xl text-blue-600 text-bold my-4'>Contacto</h1>
                <hr />
                <div className='ml-4'>
                <ContactForm />
                </div>
            </main>
        </div>
    )
}

export default Contacto