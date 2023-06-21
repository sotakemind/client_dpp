'use client'

import { ProductService } from "@/services/product/product.service"
import { EnumProductSort } from "@/services/product/product.types"
import { TypePaginationProducts } from "@/types/product.interface"
import { useQuery } from "@tanstack/react-query"
import { FC, useState } from "react"
import Heading from "../Heading"
import Loader from "../Loader"
import Button from "../button/Button"
import SortDropdown from "./SortDropdown"
import ProductItem from "./product-item/ProductItem"

interface ICatalogPagination { 
    data:TypePaginationProducts
    title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({
    data,  
    title}) => {
        const [page, setPage] = useState(1)

        const [sortType, setSortType] = useState<EnumProductSort>(
            EnumProductSort.NEWEST
        )

        const {data: response, isLoading} = useQuery(['products', sortType, page], () => ProductService.getAll({
            page,
            perPage: 15,
            sort: sortType,
            ratings: ''
        }),
        {
            initialData: data,
            keepPreviousData: true
        }
    )

        if (isLoading) return <Loader />

        return (
            <section className="ml-5 mt-10 pb-20">
                {title && <Heading className="mb-5">{title}</Heading>}
                <div className="mb-20">
                    <SortDropdown sortType={sortType} setSortType={setSortType}/>
                </div>
                {response.products.length ? (
                    <>
                    <div className="grid grid-cols-5 gap-10">
                        {response.products.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                    <div  className="text-center mt-16">
                        {Array.from({ length: response.length / 6 }).map ((_, index) => {
                            const pageNumber = index + 1
                            return (
                                <Button
                                size="sm"
                                variant={page == pageNumber ? 'blue' : 'white'}
                                onClick={() => setPage(pageNumber)}
                                className="mx-3">
                                    {pageNumber}
                                </Button>
                            )
                        })}
                    </div>
                    </>
                ) : (
                    <div>Нет товаров</div>
                )}
            </section>
        )
    }

    export default CatalogPagination