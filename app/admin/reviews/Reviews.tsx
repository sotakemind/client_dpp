'use client'
import Heading from "@/ui/Heading"
import AdminList from "@/ui/admin/admin-list/AdminList"
import { FC } from "react"
import { useAdminReviews } from "./UseAdminReviews"

const Reviews: FC = () => {
    const { data, isFetching} = useAdminReviews()

    return (
        <>  <div className="ml-5 mt-10">
            <Heading className="mb-7">Отзывы</Heading>
            <AdminList
            isLoading={isFetching}
            listItems={data}
            />
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>
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
    )
}

export default Reviews