import Image from "next/image";
import Link from "next/link"

const ProductCard = ({ item }) => {
    return (
        <article className="basis-72 shadow-lg rounded border p-2" style={{ height: 420 }}>
            <div className="flex justify-center align-center flex flex-col" style={{ height: 270 }}>
                <Link href={`/productos/detail/${item.slug}`}>
                    <Image
                        alt={item.title}
                        src={`/imgs/products/${item.image}`}
                        width={288}
                        height={288}
                    />
                </Link>
            </div>
            <div className="px-4 border-t border-gray-200" style={{ height: 200 }}>
                <h4 className="text-sm my-4">{item.title}</h4>
                <p className="text-2xl font-semibold mb-6 text-right text-blue-400">$ {item.price}</p>
            </div>
        </article>
    )
}

export default ProductCard;