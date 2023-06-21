'use client'
import Heading from "@/ui/Heading"
import AdminList from "@/ui/admin/admin-list/AdminList"
import { FC } from "react"
import { useAdminCategories } from "./UseAdminCategories"

const Categories: FC = () => {
    const { data, isFetching, mutate} = useAdminCategories()

    return (
        <>  <div className="ml-5 mt-10">
            <Heading className="mb-7">Категори</Heading>
            <AdminList
            isLoading={isFetching}
            listItems={data}
            removeHandler={mutate}
            />
            </div>
        </>
    )
}

export default Categories