import React from 'react';
import axios from 'axios';
import { RootStateType, UserInfo } from '../../types';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type ProfileContainerPropsType = {
    setUserProfile: (profile: UserInfo) => void;
    profile: UserInfo;
} & RouteComponentProps<{ userID: string }>;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        const { match } = this.props;
        if (match.params.userID) {
            let userID = this.props.match.params.userID;
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
                .then(response => {
                    this.props.setUserProfile(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.error('UserID is undefined');
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
    };
};

export default connect(mapStateToProps, {
    setUserProfile,
})(withRouter(ProfileContainer));
