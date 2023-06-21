import { ProductService } from '@/services/product/product.service'
import type { Metadata } from 'next'
import Home from './Home'


export const metadata: Metadata = {
    description: 'Интернет-магазин бытовой техники и электроники'
}

export const revalidate = 60

async function getProducts() {
    const data = await ProductService.getAll({
        page: 1,
        perPage: 15,
        ratings: ''
    })

    return data
}

export default async function HomePage() {
    const data = await getProducts()
    
    return <Home products={data.products} length={data.length} />
}
