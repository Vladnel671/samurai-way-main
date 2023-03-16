import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import state, {ActionsTypes, ProfilePageType, RootStateType, StoreType} from "./redux/state" //addPost, changePostTextCallback,

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props): JSX.Element => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <Dialogs store={props.store} state={props.store._state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile
                    changePostTextCallback={props.store.changePostTextCallback.bind(props.store)}
                    messageForNewPost={state.profilePage.messageForNewPost} dispatch={props.dispatch}
                    state={state.profilePage}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>

            </div>
        </div>
    )
}


export default App;
