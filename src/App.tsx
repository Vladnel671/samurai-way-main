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
import state, {ProfilePageType, RootStateType, StoreType} from "./redux/state" //addPost, changePostTextCallback,

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    messageForNewPost: string
    changePostTextCallback: (newText: string) => void
    store: StoreType
}

const App: React.FC<AppPropsType> = (props): JSX.Element => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path="/dialogs" render={() => <Dialogs store={props.store} state={props.store._state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile
                    changePostTextCallback={props.store.changePostTextCallback.bind(props.store)}
                    messageForNewPost={props.store._state.profilePage.messageForNewPost} addPost={props.store.addPost.bind(props.store)}
                    state={props.state.profilePage}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>

            </div>
        </div>
    )
}


export default App;
