'use client'

import { getAdminUrl } from "@/config/url.config"
import { OrderService } from "@/services/order.service"
import { IListItem } from "@/ui/admin/admin-list/admin-list.interface"
import { convertPrice } from "@/utils/convertPrice"
import { formatDate } from "@/utils/format-date"
import { useQuery } from "@tanstack/react-query"

export const useAdminOrders = () => {
    const {data, isFetching} = useQuery (['get admin orders'], () => OrderService.getAll(), {
        select: ({data}) => data.map((order):IListItem => {
            return {
                id: order.id,
                editUrl: getAdminUrl(`/orders/edit/${order.id}`),
                items: [
                    `# ${order.id}`,
                    order.status,
                    formatDate(order.createdAT),
                    convertPrice(order.total)
                ]
            }
        })
    }
)

return {
    data,
    isFetching
}

}