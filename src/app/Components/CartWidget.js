"use client"
import Link from "next/link"
import { useCartContext } from "./Context/CartContext"
import Image from "next/image"

const CartWidget = () => {
    const { totalQty } = useCartContext()

    return(
        <Link href={"/cart"} className="text-base text-slate-100 p3 flex items-center">
            <Image 
                src={"/icons/cart-icon.jpg"}
                alt="Cart icon"
                width={30}
                height={30}
            />
            <span>{totalQty()}</span>
        </Link>
    )
}

export default CartWidget