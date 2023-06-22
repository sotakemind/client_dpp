'use client'
import { ProductService } from "@/services/product/product.service"
import Catalog from "@/ui/catalog/Catalog"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../app/layout"


const SearchPage: NextPage = () => {
    const { query } = useRouter()
    const queryClient = new QueryClient()


    const { data } = useQuery(['Поиск товаров', query.term], () =>
    ProductService.getAll()
    )

    return (
            
            <QueryClientProvider client={queryClient}>
            <Layout>
                <div className="ml-10 mt-5">
                <Catalog products={data?.products || []}
                title={`Поиск по запросу "${query.term || ''}"`}/>
                <div className="h-80"></div>
                <div className="h-80"></div>
                </div>
            </Layout>
          </QueryClientProvider>
    )
}

export default SearchPage
