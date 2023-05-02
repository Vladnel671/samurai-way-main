import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {ActionsTypes, StoreType} from "./redux/state"

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props): JSX.Element => {

    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <Dialogs store={props.store} dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path="/profile" render={() => <Profile
                    messageForNewPost={props.store._state.profilePage.messageForNewPost}
                    addPost={props.store.addPost.bind(props.store)}
                    changePostTextCallback={props.store.changePostTextCallback.bind(props.store)}
                    dispatch={props.store.dispatch.bind(props.store)}
                    state={props.store}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>

            </div>
        </div>
    )
}


export default App;
