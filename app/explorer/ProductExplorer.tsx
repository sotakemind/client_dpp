// import { TypePaginationProducts } from "@/types/product.interface";
// import { useQuery } from "@tanstack/react-query";
// import { FC, useState } from "react";
// import { useFilters } from "./useFilters";

// interface IProductExplorer {
//     initialProducts: TypePaginationProducts
// }

// const ProductExplorer: FC<IProductExplorer> = ({initialProducts}) => {
//     const [isFilterOpen, setIsFilterOpen] = useState(false)

//     const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

//     const { data, isFetching} = useQuery(
//         ['product explorer', queryParams],
//         {
//             initialData: initialProducts,
//             enabled: isFilterUpdated
//         }
//     )

//     return <div>ProductExplorer</div>
// }