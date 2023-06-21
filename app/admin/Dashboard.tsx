'use client'

import { StatisticsService } from "@/services/statistics.service"
import Heading from "@/ui/Heading"
import { useQuery } from "@tanstack/react-query"
import { FC } from "react"

const Dashboard: FC = () => {
    const { data, isFetching } = useQuery(
        ['statistics'],
        () => StatisticsService.getMain(),
        {
            select: ({ data }) => data
        }
    )

    
    return (
        <>
        <div className="ml-5 mt-10">
        <Heading className="mb-8">Общая статистика</Heading>
        {/* {isFetching ? (
            <Loader />
        ) : data?.length ? (
            <div className={style.wrapper}>{data.map((item, index) => (
                <div key={item.name} className="{style.item}">
                    <div>{item.name}</div>
                    <div>
                        {index === data.length -1
                        ? convertPrice(item.value || 0)
                        : item.value}
                    </div>
                </div>
                ))}
            </div>
        ) : (
            <div>Статистика не найдена</div>
        )} */}
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
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <div className="h-10"></div>
        </div>
        </>
    )
}

export default Dashboard