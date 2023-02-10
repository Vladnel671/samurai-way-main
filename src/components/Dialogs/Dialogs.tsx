import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemsPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    message: string
}

const DialogsItem : React.FC<DialogsItemsPropsType> = (props) => {
    let path = "/dialogs/" +  props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessagePropsType> = (props) =>{
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogsItem name="Vlad" id="1"/>
                <DialogsItem name="Dimych" id="2"/>
                <DialogsItem name="Sveta" id="3"/>
                <DialogsItem name="Viktor" id="4"/>
                <DialogsItem name="Andrey" id="5"/>
                <DialogsItem name="Anton" id="6"/>

            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};

export default Dialogs;