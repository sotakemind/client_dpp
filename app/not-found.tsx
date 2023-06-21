import Heading from "@/ui/Heading";

import Link from "next/link";

export default function NotFound() {
    return (
        <>
        <div className="ml-10 mt-10">
            <Heading>Страница не найдена</Heading>
            <p> Не удалось найти запрошенную страницу</p>
            <p>
                Вернуться обратно{' '}
                <Link href='../' className='text-primary'>
                    Все продукты
                </Link>
            </p>
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