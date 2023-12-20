import {ActionsTypes, UsersPageType, UserType} from "../types";

const initialState: UsersPageType = {
    users: [],
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};


export const userReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state, users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.page
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
};

export const follow = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const;
};
export const unfollow = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const;
};
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const;
}
export const setCurrentPage = (page: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        page
    } as const
}
export const setTotalUserCount = (totalCount: number) => {
    return {
        type: "SET_TOTAL_COUNT",
        totalCount
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}