"use client"
import { useRouter } from "next/navigation"

const GoBack = ({...args}) => {
    const router = useRouter()

    return (
        <button 
        className="rounded-xl py-2 px-3 bg-blue-400 text-center text-white"
        onClick={() => router.back()} {...args}
        >
            Volver al pasado
        </button>
    )
}

export default GoBack
