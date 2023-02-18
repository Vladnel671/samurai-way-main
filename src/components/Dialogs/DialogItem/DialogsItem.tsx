import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemsPropsType = {
    name: string
    id: number
}

const DialogsItem: React.FC<DialogsItemsPropsType> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " "+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogsItem;