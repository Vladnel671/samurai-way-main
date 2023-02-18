import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../index";

type DialogPropsType = {
    dialogs: DialogsType[],
    messages: MessagesType[]
}

const Dialogs: React.FC<DialogPropsType> = (props) : JSX.Element => {

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    );
};

export default Dialogs;