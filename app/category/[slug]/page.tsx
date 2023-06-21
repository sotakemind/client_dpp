import { CategoryService } from "@/services/category.service"
import { ProductService } from "@/services/product/product.service"
import { IPageSlugParam, TypeParamSlug } from "@/types/page-params"
import Catalog from "@/ui/catalog/Catalog"

export const revalidate = 60

export async function generateStaticParams(){
    const categories = await CategoryService.getAll()

    const paths = categories.data.map(category => {
        return {
            params: {slug: category.slug}
        }
    })

    return paths
}

async function getProducts(params: TypeParamSlug) {
    const {data: products} = await ProductService.getByCategory(
        params?.slug as string
    )

    const { data: category } = await CategoryService.getBySlug
    (
        params?.slug as string
    )

    return {products, category}
}

import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: IPageSlugParam): Promise<Metadata> {
    const {category, products} = await getProducts(params)

    return {
        title: category.name,
        description: `Random description about $(category.name)`,
        openGraph: {
            images: products[0].images,
            description: `Random description about ${category.name}`
        }
    }
}

export default async function CategoryPage({params}: IPageSlugParam) {
    const data = await getProducts(params)

  return (
    <>
    <div className="ml-5 mt-10">
    <Catalog products={data.products || []} title={data.category.name}/>
    <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        </div>
    </>
)}
