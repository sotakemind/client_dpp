'use client'
import { ProductService } from "@/services/product/product.service"
import Catalog from "@/ui/catalog/Catalog"
import { useQuery } from "@tanstack/react-query"
import { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../app/layout"


const SearchPage: NextPage = () => {
    const { query } = useRouter()


    const { data } = useQuery(['Поиск товаров', query.term], () =>
    ProductService.getAll()
    )

    return (
            <Layout>
                <div className="ml-10 mt-5">
                <Catalog products={data?.products || []}
                title={`Поиск по запросу "${query.term || ''}"`}/>
                <div className="h-80"></div>
                <div className="h-80"></div>
                </div>
            </Layout>
    )
}

export default SearchPage
