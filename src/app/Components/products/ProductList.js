import ProductCard from "./ProductCard";

const ProductsList = async ({ categoria }) => {
    try {
        const response = await fetch(`http://localhost:3000/api/productos/${categoria}`, {
            cache: "no-store", // la informacion que sea siempre actualizada
            next: {
                tags: ["productos"]
            },
            headers: {'Content-Type': 'application/json'}  // Especifica el tipo de contenido esperado
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const items = await response.json();
        if (items) {
            return (
                <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
                    { items.map(item => <ProductCard key={item.slug} item={item} />) }
                </section>
            )
        } else {
            console.error('Cadena JSON vacía o indefinida.');
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }

    return <p>Error al cargar los productos.</p>;
}

export default ProductsList