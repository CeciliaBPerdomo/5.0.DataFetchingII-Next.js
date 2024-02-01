import React from 'react'
import Link from 'next/link'

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache",           // Viene por defecto y fuerza al cache --> no-store: no cache la respuesta    
                                        // Retorna lo que tiene guardado en el cache
        next: { revalidate: 3600 }      // hace el refetch cada una hora
                                        // si se pone en 0, se hace bajo demanda
    }) 

    if (!response.ok) {
        throw new Error("Fallo la obtencion de datos, men!")
    }

    return response.json()
}

const Posts = async () => {

    const posts = await getPosts()
    return (
        <div className='container m-auto mt-6'>
            <h1 className='text-2xl'>Posts</h1>
            <hr />
            <ul>
                {posts.map((post) => (
                    <Link href={`/posts/${post.id}`} key={post.id}>
                    <li  
                        className='my-4 ml-6'
                    > {post.id}. <b>{post.title}</b>
                    </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Posts