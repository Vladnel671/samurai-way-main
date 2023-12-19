import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer"
import {Dispatch} from 'redux';
import {DialogPageType, DialogsMapDispatchToPropsType, RootStateType} from "../../types";

let mapStateToProps = (state: RootStateType): DialogPageType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: Dispatch): DialogsMapDispatchToPropsType => {
    return {
        updateNewMessageBody: (newText: string) => {
            dispatch(updateNewMessageBodyAC(newText))
        },
        sendNewMessageBody: (body: string) => {
            dispatch(sendMessageAC(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer