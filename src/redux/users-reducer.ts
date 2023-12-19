import {ActionsTypes, UsersPageType, UserType} from "../types";

const initialState: UsersPageType = {
    users: [
        {
            id: 1,
            userPhoto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg",
            followed: true,
            fullName: "Vlad",
            status: ":)",
            location: {city: 'Washington', country: 'USA'}
        },
        {
            id: 2,
            userPhoto: "data:image/jpeg;base64,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",
            followed: false,
            fullName: "Ilya",
            status: "Hello world!",
            location: {city: 'Krasnodar', country: 'Russia'}
        },
        {
            id: 3,
            userPhoto: "data:image/jpeg;base64,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",
            followed: false,
            fullName: "Kolya",
            status: "My life my rules.",
            location: {city: 'New York', country: 'USA'}
        },
        {
            id: 4,
            userPhoto: "https://i.pinimg.com/736x/cc/cc/4d/cccc4d3c17d97e05226c10c30d8d7689.jpg",
            followed: true,
            fullName: "Misha",
            status: "Live without regrets.",
            location: {city: 'Berlin', country: 'Germany'}
        },
        {
            id: 5,
            userPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEzFwFYdwr4S5MRWKZJ4mt84mNZauEDWYX5xs-lcMF4oE6IUf7KjdyfQMvJd-LVhwydU&usqp=CAU",
            followed: true,
            fullName: "Dima",
            status: "Never stop dreaming.",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 6,
            userPhoto: "https://mytopkid.com/wp-content/uploads/mytopkid.com-shailushai-avatar-10-800x800.jpg",
            followed: true,
            fullName: "Misha",
            status: "No gain without pain.",
            location: {city: 'Beijing', country: 'China'}
        },
        {
            id: 7,
            userPhoto: "https://cojo.ru/wp-content/uploads/2022/12/milye-kotiki-na-avu-4.webp",
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
