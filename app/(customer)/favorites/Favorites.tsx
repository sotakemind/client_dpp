'use client'

import { useProfile } from "@/hooks/useProfile"
import Catalog from "@/ui/catalog/Catalog"

interface IFavorites {}

export default function Favorites({}: IFavorites) {
    const {profile} = useProfile()
    
    return (
        <>
        <div className="h-20 ml-10 mt-10">
        <Catalog products={profile?.favorites || []} title="Избранное"></Catalog>
        </div>
        <div className="h-80"></div>
        <div className="h-80"></div>
        <div className="h-80"></div>
    </>
    )
}
