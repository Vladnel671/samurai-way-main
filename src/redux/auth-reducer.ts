import {AuthActionsType, AuthStateType} from "../types";

let initialState: AuthStateType = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userID: number, email: string, login: string) => {
    return {
        type: "SET_USER_DATA",
        data: {
            userID,
            email,
            login
        }
    } as const
}