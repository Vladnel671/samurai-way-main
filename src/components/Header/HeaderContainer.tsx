import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { RootStateType } from '../../types';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';

type HeaderContainerPropsType = {
    setAuthUserData: (userID: number, email: string, login: string) => void;
    isAuth: boolean;
    login: string | null;
};

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { isAuth, login } = this.props;
        return <Header isAuth={isAuth} login={login} />;
    }
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {
    setAuthUserData,
})(HeaderContainer);