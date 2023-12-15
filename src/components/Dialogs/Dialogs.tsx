import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

type DialogsPropsType = {
    dialogPage: {
        dialogs: Array<{ id: number; name: string }>;
        messages: Array<{ id: number; message: string }>;
        newMessageBody: string;
    };
    updateNewMessageBody: (newText: string) => void;
    sendNewMessageBody: (body: string) => void;
};

const Dialogs: React.FC<DialogsPropsType> = ({
                                                 dialogPage,
                                                 updateNewMessageBody,
                                                 sendNewMessageBody,
                                             }) => {

    const {dialogs, messages, newMessageBody} = dialogPage;

    let dialogsElements = dialogs.map((d) => (
        <DialogsItem key={d.id} name={d.name} id={d.id}/>
    ));
    let messagesElements = messages.map((m) => (
        <Message key={m.id} message={m.message}/>
    ));

    let onSendMessageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sendNewMessageBody(newMessageBody);
    };
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageBody(e.target.value);
    };

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                              <textarea
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