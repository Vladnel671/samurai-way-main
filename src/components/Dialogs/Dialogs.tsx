import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemsPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
}

const DialogsItem: React.FC<DialogsItemsPropsType> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

const Dialogs = () => {

    let dialogsData= [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Anton'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>

            </div>
        </div>
    );
};

export default Dialogs;