import { IProduct } from "@/types/product.interface"

interface IProductPage {
    initialProduct: IProduct
    similarProducts: IProduct[]
    slug?: string
}

export default function Product({
    initialProduct,
    similarProducts,
    slug = ''
}: IProductPage) {
    return <div></div>
}

