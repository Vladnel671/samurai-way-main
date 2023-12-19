import {ActionsTypes, UsersPageType, UserType} from "../types";

const initialState: UsersPageType = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: "Vlad",
            status: ":)",
            location: {city: 'Washington', country: 'USA'}
        },
        {
            id: 2,
            followed: false,
            fullName: "Ilya",
            status: "Hello world!",
            location: {city: 'Krasnodar', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            fullName: "Kolya",
            status: "My life my rules.",
            location: {city: 'New York', country: 'USA'}
        },
        {
            id: 4,
            followed: true,
            fullName: "Misha",
            status: "Live without regrets.",
            location: {city: 'Berlin', country: 'Germany'}
        },
        {
            id: 5,
            followed: true,
            fullName: "Dima",
            status: "Never stop dreaming.",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 6,
            followed: true,
            fullName: "Misha",
            status: "No gain without pain.",
            location: {city: 'Beijing', country: 'China'}
        },
        {
            id: 7,
            followed: false,
            fullName: "Anton",
            status: "Fortune favors the brave.",
            location: {city: 'Busan', country: 'Korea'}
        },
    ]
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
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const;
};

export const unfollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const;
};

export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const;
}
