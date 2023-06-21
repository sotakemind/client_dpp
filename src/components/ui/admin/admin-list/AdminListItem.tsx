import { FC } from "react"
import style from "./AdminList.module.scss"
import AdminActions from "./admin-actions/AdminActions.module"
import { IAdminListItem } from "./admin-list.interface"

const AdminListItem: FC<IAdminListItem> = ({ removeHandler, listItem}) => {
    return (
        <div className={style.item}>
            {listItem.items.map(value => (
                <div key={value}>{value}</div>
            ))}

            <AdminActions
            viewUrl={listItem.viewUrl}
            editUrl={listItem.editUrl}
            removeHandler={removeHandler}
            />
        </div>
    )
}


export default AdminListItem