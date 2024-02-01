import { NextResponse } from "next/server";
import { mockData } from "@/app/Components/data/products";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
}

// Esto habilita que nuestros productos pueda manejar peticiones
export async function GET(request, {params}) {
    const {categoria} = params
    const data = categoria === "todos" ? mockData: mockData.filter(item => item.type === categoria)
    await sleep(1000)
    return NextResponse.json(data)
}