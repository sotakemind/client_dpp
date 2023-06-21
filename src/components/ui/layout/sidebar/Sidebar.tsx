'use client'

import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdminPanel } from "@/hooks/useIsAdminPanel";
import Loader from "@/ui/Loader";
import cn from 'classnames';
import Link from "next/link";
import { FC } from "react";
import { ADMIN_MENU } from "./admin-menu-data";
import { convertToMenuItems } from "./convert-to-menu-items";
import { useCategories } from "./quieries/useCategories";

const Sidebar: FC = () => {
    const { data, isLoading } = useCategories()
    const { user } = useAuth()
    const { logout } = useActions()

    const { isAdminPanel, pathname } = useIsAdminPanel()



    return (
    <aside className=" bg-secondary flex flex-col justify-between h-full z-10"
    >
        <div>
            {isLoading ? (
                <Loader />
                ): data ? (
                    <>
                    <div className="text-xl text-white mt-4 mb-6 ml-6">
                        {isAdminPanel ? 'Меню: ' : 'Категории: '}
                    </div>
                    <ul>
                        {(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(item => (
                            <li key={item.href}>
                                <Link className ={cn("block text0lg my-3 px-10 hover:text-primary transition-colors duration-200 hover:border-r-8",
                                pathname == item.href
                                ? 'text-primary border-r-8'
                                : 'text-white'
                                )}
                                href={item.href}
                                >
                                {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </>
                ) : (
                    <div>Категория не найдена!</div>
                )}
        </div>
        {/* {!! user && (
            <button className="text-white flex items-center ml-10 mt-80"
            onClick={() => logout()}
            >
            <FiLogOut />
            <span className="ml-2">Выйти</span>
            </button>
        )}
        <Link href = "/auth" >
        {!user && (
            <button className="text-white flex items-center ml-10 mb-20">
            <FiLogOut />
            <span className="ml-2">Войти</span>
            </button>
        )}
        </Link> */}
    </aside>
    )
}

export default Sidebar