import React from 'react'
import { UserType } from './HW8'
import s from './HW8.module.css'

// types
type UserPropsType = {
    u: UserType
}

const User: React.FC<UserPropsType> = ({ u }) => {
    return (
        <tr id={'hw8-user-' + u._id + '-' + u.age} className={s.item}>
            <td id={'hw8-user-name-' + u._id} className={s.nameCol}>
               <span>{u.name}</span>

            </td>
            <td id = {'hw8-user-age-' + u._id} className={s.ageCol}>
                <span>{u.age}</span>

            </td>
        </tr>
    )
}

export default User
