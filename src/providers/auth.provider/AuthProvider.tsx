
import { ADMIN_PANEL_URL } from "@/config/url.config";
import { REFRESH_TOKEN } from "@/constants/token.constants";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import Cookies from "js-cookie";
import { usePathname, useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useEffect } from "react";
import NotFound from "../../../app/not-found";
import { protectedRoutes } from "./protecred-routes.data";

const AuthProvider: FC<PropsWithChildren<unknown>> = ({
    children
}) => {
    const {user} = useAuth()
    const {checkAuth, logout} = useActions()

    const pathname = usePathname()

    useEffect(() => {
        const accessToken = Cookies.get()
        if(accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get(REFRESH_TOKEN)
        if(!refreshToken && user) {
            logout()
        }
    }, [pathname])

    const router = useRouter()

    const isProtectedRoute = pathname?.startsWith(ADMIN_PANEL_URL)

    const isAdminRoute = protectedRoutes.some(route => pathname?.startsWith(route))

    if(!isProtectedRoute && !isAdminRoute) return <>{children}</>

    if(user?.isAdmin) return <>{children}</>

    if(user && isProtectedRoute) return <>{children}</>

    if(user && isAdminRoute) return <NotFound />

    pathname !== '/auth' && router.replace('/auth')
    return null
}

export default AuthProvider