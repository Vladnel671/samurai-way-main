import React from 'react'
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer"
import { Dispatch } from 'redux';
import {RootStateType} from "../../types";

let mapStateToProps = (state: RootStateType) => {
    debugger
    return {
        dialogPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
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