import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsType, MessagesType} from "../../types";

type DialogsPropsType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageBody: string,
    updateNewMessage: (newText: string) => void,
    sendMessage: (body: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({
                                                 dialogs,
                                                 messages,
                                                 sendMessage,
                                                 newMessageBody,
                                                 updateNewMessage
                                             }) => {

    let dialogsElements = dialogs.map((d) => (
        <DialogsItem key={d.id} name={d.name} id={d.id}/>
    ));
    let messagesElements = messages.map((m) => (
        <Message key={m.id} message={m.message}/>
    ));

    let onSendMessageClick = () => {
        if (newMessageBody.trim() !== '') {
            sendMessage(newMessageBody);
        }
    };

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessage(e.target.value);
    };

    return (
        <div className={s.DialogsBlock}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                              <textarea
                                  className={s.textArea}
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"
                              ></textarea>
                        </div>
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