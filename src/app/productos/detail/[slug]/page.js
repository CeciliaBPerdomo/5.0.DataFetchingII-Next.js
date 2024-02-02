import ProductDetail from '@/app/Components/products/ProductDetail'
import React from 'react'

function DetalleProductos({params}) {
    const {slug} = params
  return (
    <div>
        <ProductDetail slug={slug}/>
    </div>
  )
}

export default DetalleProductos