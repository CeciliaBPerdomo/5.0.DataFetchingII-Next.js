import { NextResponse } from "next/server";
import { mockData } from "@/app/Components/data/products";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
}

export async function GET(request, {params}) {
    const {slug} = params
    console.log(slug)
    const data = mockData.find(product => product.slug === slug)
    
    await sleep(1000) // simula una carga asincronica
    return NextResponse.json(data)
}