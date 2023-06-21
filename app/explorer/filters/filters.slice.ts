import { EnumProductSort } from "@/services/product/product.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFiltersActionsPayload, IFiltersState } from "./filters.types";

const initialState: IFiltersState = {
    isFilterUpdated: false,
    queryParams: {
        sort: EnumProductSort.NEWEST,
        searchTerm: '',
        page: 1,
        perPage: 20,
        ratings: ''
    }
}

export const filtersSlice = createSlice ({
    name: 'Фильтр товаров',
    initialState,
    reducers: {
        updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
            const {key, value} = action.payload
            state.queryParams[key] = value
        },
        resetFilterUpdate: state => {
            state.isFilterUpdated = false
        }
    }
})