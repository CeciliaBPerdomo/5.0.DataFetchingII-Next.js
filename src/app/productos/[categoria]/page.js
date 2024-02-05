import CategoriesMenu from "@/app/Components/products/CategoriesMenu"
import ProductsList from "@/app/Components/products/ProductList"
import { Suspense } from "react"

export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `Productos - ${params.categoria}`
    }

}

const Productos = ({ params }) => {
    const { categoria } = params

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>
            <div className="flex gap-10">
                <CategoriesMenu />

                <Suspense fallback={<div>
                    <h1 className="text-2xl">Cargando...</h1>
                    </div>
                }>
                    <ProductsList categoria={categoria} />
                </Suspense>

            </div>
        </main>
    )
}

export default Productos;