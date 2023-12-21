import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {RootStateType, UserInfo} from "../../types";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

type ProfileContainerPropsType = {
    setUserProfile: (profile: UserInfo) => void
    profile: UserInfo
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile
    };
};

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);