'use client'

import { OrderService } from "@/services/order.service"
import Heading from "@/ui/Heading"
import { convertPrice } from "@/utils/convertPrice"
import { useQuery } from "@tanstack/react-query"

interface IMyOrders {}

export default function MyOrders({}: IMyOrders) {
    const { data: orders } = useQuery(
    ['my orders'],
    () => OrderService.getByUserId(),
    { select: ({ data }) => data}
    )



    return (
        <>
            <Heading>Мои заказы</Heading>

            <section>
                {orders?.length ? (
                    orders.map(order => (
                        <div
                        key={order.id}
                        className="rounded-lg bg-white shadow flex gap-10 p-7 my-7"
                        >
                            <span>#{order.id}</span>
                            <span>{order.status}</span>
                            <span>
                                {new Date(order.createdAT).toLocaleDateString('ru-Ru')}
                            </span>
                            <span>{convertPrice(order.total)}</span>
                        </div>
                    ))
                ): ( 
                    <div>Заказы не найдены!</div>
                )}
            </section>
        </>
    )
}
