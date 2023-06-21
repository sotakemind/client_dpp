'use client'
import Heading from "@/ui/Heading"
import AdminList from "@/ui/admin/admin-list/AdminList"
import { FC } from "react"
import { useAdminProducts } from "./UseAdminProducts"

const Products: FC = () => {
    const { data, isFetching, mutate} = useAdminProducts()

    return (
        <>  <div className="ml-5 mt-10">
            <Heading className="mb-7">Товары</Heading>
            <AdminList
            isLoading={isFetching}
            listItems={data}
            removeHandler={mutate}
            />
            </div>
        </>
    )
}

export default Products