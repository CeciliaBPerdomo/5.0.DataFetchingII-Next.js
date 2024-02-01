import { mockData } from "../data/products";
import ProductCard from "./ProductCard";

const ProductsList = async ({categoria}) => {
    const items = await fetch(`http://localhost:3000/api/productos/${categoria}`, {
        cache: "no-store", // la informacion que sea siempre actualizada
        next: {
            tags: ["productos"]
        }
    })
    .then(r => r.json())
    //console.log(items)


// cambio mockdata -- por la respuesta que llega desde la ruta
    // const items = categoria === "todos" ? data : data.filter(item => item.type === categoria)

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <ProductCard key={item.slug} item={item} />)
            }
        </section>
    )
}

export default ProductsList