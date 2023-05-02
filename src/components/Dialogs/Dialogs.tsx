import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {ActionsTypes, StoreType} from "../../redux/state";
import {sendNewMessageBodyAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props): JSX.Element => {

    let dialogsElements = props.store._state.dialogsPage.dialogs.map(d => <DialogsItem key={d.id} name={d.name}
                                                                                       id={d.id}/>)
    let messagesElements = props.store._state.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = props.store._state.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendNewMessageBodyAC(newMessageBody))
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyAC(body))
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
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                       placeholder='Enter your message'></textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;