import { TypeDataProductFilters } from "@/services/product/product.types"

export interface IFiltersState {
    isFilterUpdated: boolean
    queryParams: TypeDataProductFilters
}

export interface IFiltersActionsPayload {
    key: keyof  TypeDataProductFilters
    value: string
}