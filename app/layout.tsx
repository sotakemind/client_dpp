'use client'
import '@/assets/styles/globals.scss'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import Providers from '@/providers/Providers'
import Header from '@/ui/layout/header/Header'
import Sidebar from '@/ui/layout/sidebar/Sidebar'
import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'


const metadata: Metadata = {
    icons: {
        icon: '/favicon.svg'
    },
    title: {
        absolute: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
    metadataBase: new URL(getSiteUrl()),
    openGraph: {
        type: 'website',
        siteName: SITE_NAME,
        emails: ['info@techbyte.com']
    }
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return <html lang='en'>
        <body>
            <Providers>
        <div className='bg-secondary'>
        <Header />
        <div className="grid" style={{gridTemplateColumns: '1fr 6fr'}}>
            <Sidebar />
            <main className="p-12 pb-52 bg-white rounded-tl-lg">{children}
            </main>
        </div>
        <div className=''>
            <div className="bg-black h-10 flex justify-end items-center text-white text-xs p-5">
            © Интернет-магазин бытовой техники и электроники, 2023 <span className='ml-10'>Красноярск, ул. Ленина, 27</span>  <span className='ml-5 mr-px'>Связаться с нами: info@techbyte.ru</span>
            </div>
        </div>
        
    </div>
            </Providers>
            <div id='modal'></div>
        </body>
    </html>
}
