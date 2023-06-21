'use client'

import { useCart } from "@/hooks/useCart"
import { useOutside } from "@/hooks/useOutside"
import SquareButton from "@/ui/button/SquareButton"
import { convertPrice } from "@/utils/convertPrice"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { RiShoppingCartLine } from "react-icons/ri"
import styles from './Cart.module.scss'
import CartItem from "./CartItem"


const Cart: FC = () => {
    const {isShow, setIsShow, ref} = useOutside(false)

    const { items, total } = useCart()

    const { push } = useRouter()


    return (
        <div className="relative" ref={ref}>
            <SquareButton
            Icon={RiShoppingCartLine}
            onClick={() => {
                setIsShow(!isShow)
            }}
            number={items.length}
            />
    {isShow &&
            <div className={styles.cartWrapper}
            >
            <div className="font-normal text-lg mb-5">Корзина</div>
            

            <div className="">
                {items.length ? (
                    items.map(item => <CartItem item ={item} key={item.id}/>)
                ) : (
                    <div className="font-light">В корзине пусто!</div>
                )}
            </div>

            <div className="flex justify-center flex-col mx-10 text-center">
                <div>К оплате: </div>
                <div>{convertPrice(total)}</div>
            </div>

            {!!items.length && (
                <div className="text-center mt-7 mb-5">
                    <Link className='btn btn-white' href='/checkout'>Оформить заказ
                    </Link>
                </div>
            )}
        </div>
    }
    </div>
    )
}

export default Cart