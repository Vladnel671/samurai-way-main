import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import state, {DialogsType, RootStateType, MessagesType, DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogPageType
}


const Dialogs: React.FC<DialogsPropsType> = (props): JSX.Element => {

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let dialogElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        let message = dialogElement.current?.value
        alert(message)
    }

    return (
        <div>
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
            <div>
                <textarea ref={dialogElement}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;