import { NextResponse } from "next/server";
import { mockData } from "@/app/Components/data/products";
import { revalidateTag, revalidatePath } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
}

// Esto habilita que nuestros productos pueda manejar peticiones
export async function GET(request, {params}) {
    const {categoria} = params
    const data = categoria === "todos" ? mockData: mockData.filter(item => item.type === categoria)
    
    await sleep(1000)
    //revalidateTag("productos")                // --> por tag, pasada desde el ftch de product list
    revalidatePath("/productos/[categoria]")    //--> revalida nuestro cache cada vez que ingresa a esa ruta
    return NextResponse.json(data)
}