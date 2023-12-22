import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {sendMessage, updateNewMessage} from "../../redux/dialogs-reducer"
import {DialogPageType, RootStateType} from "../../types";

let mapStateToProps = (state: RootStateType): DialogPageType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessage
})(Dialogs)

export default DialogsContainer