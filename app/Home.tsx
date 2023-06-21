'use client'
import { useActions } from "@/hooks/useActions"
import { useAuth } from "@/hooks/useAuth"
import { TypePaginationProducts } from "@/types/product.interface"
import CatalogPagination from "@/ui/catalog/CatalogPaginaton"
import { FC } from "react"

const Home: FC<TypePaginationProducts> = ({products}) => {

  const { user } = useAuth()
  const { logout } = useActions()

  return (
        <CatalogPagination title="СПИСОК ТОВАРОВ" data={{products, length}} />
  )
}

export default Home