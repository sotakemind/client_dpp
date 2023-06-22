

import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Qsearch from './Qsearch'

export const metadata: Metadata = {
    title: 'Search',
    ...NO_INDEX_PAGE
}

export default function QsearchPage() {
    return <Qsearch />
}
