'use client'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Image from 'next/image'
import Link from "next/link"
import { FC } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { FiLogOut } from 'react-icons/fi'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import HeaderCart from '../cart/cart-item/HeaderCart'
import HeaderProfile from './HeaderProfile'
import Search from './Search'


const Header: FC = () => {

    const {isAdminPanel} = useIsAdminPanel()
    const {user} = useAuth()

    const { logout } = useActions()
    
    return (
        <header
        className="bg-secondary w-full  px-6 grid"
        style={{gridTemplateColumns: '1fr 2fr 1.2fr 0.4fr'}}
        >
        <Link href='/' className='mt-10'>
            {isAdminPanel ? (
                <h2 className='text-3xl text-white font-semibold'> Админ Панель</h2>
            ) : (
            <Image 
            priority
            width={120}
            height={37}
            src='/images/logo-2.png'
            alt='TechByte'
            />
            )}
        </Link>
        <Search />
        <div className="flex items-center justify-end gap-10 mb-3">
        {user?.isAdmin && !isAdminPanel && (
            <Link
            href='/admin'
            className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
            >
                <MdOutlineAdminPanelSettings size={29} />
            </Link>
        )}
        <Link href='/favorites' className="text-white">
            <AiOutlineHeart size={28}/>
        </Link>
         <HeaderCart />
        <HeaderProfile  />
        </div>
        <div className='flex justify-end'>
        {!! user && (
            <button className="text-white flex items-center mb-3 hover:text-primary hover:transition-colors"
            onClick={() => {logout(); window.location.reload();}
            }
            >
            <FiLogOut />
            <span className="ml-2">Выйти</span>
            </button>
        )}
        <Link href = "/auth" >
        {!user && (
            <button className=" text-white flex items-center mt-10 hover:text-primary hover:transition-colors">
            <FiLogOut />
            <span className="ml-2">Войти</span>
            </button>
        )}
        </Link>
        </div>
        </header>
    )
}

export default Header