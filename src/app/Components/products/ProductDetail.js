import Image from "next/image";

const ProductDetail = async ({ slug }) => {
    console.log(slug)
    
    const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
        cache: "no-store",
        next: {revalidate: 0}
    })
    .then(res => res.json())
    return (
        <div className="max-w-4xl m-auto">
            {/* Go back falta aca */}
            <section className="flex gap-6"> 
                <div className="relative basis-1/2">
                    <Image 
                        src={`/imgs/products/${item.image}`}
                        alt={item.title}
                        width={860}
                        height={860}
                    />
                </div>
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">
                        {item.title}
                    </h2>
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">
                    Descripcion
                </h3>
                <p className="text-gray-600">
                    {item.description}
                </p>
            </section>
        </div>
    )
}

export default ProductDetail