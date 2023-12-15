import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemsPropsType = {
    name: string
    id: number
}

const DialogsItem: React.FC<DialogsItemsPropsType> = ({id, name}) => {
    let path = "/dialogs/" + id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogsItem;