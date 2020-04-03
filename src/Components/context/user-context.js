import React, { useReducer, createContext } from 'react'
import UserReducer from './UserReducer'


export const UserContext = createContext()

const initialState = {
    users: [
        {
            id: 7,
            username: 'Sohrab',
            email: 'sohrab345@gmail.com',
            password: '123456'
        },
        {
            id: 8,
            username: 'Ali',
            email: 'ali213@gmail.com',
            password: '123456'
        },
        {
            id: 9,
            username: 'Sara',
            email: 'sarabd33@yahoo.com',
            password: '123456'
        },
        {
            id: 10,
            username: 'Shahab',
            email: 'shahab@exam.com',
            password: '123456'
        }
    ],
}

export const UserContextProvider = props => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    return (
        <UserContext.Provider value={{userData: state.users, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}



// Define the custom hook
// const useUsers = () => {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   const {users} = state

//   const addUser = (username, email, password ) => {
//     dispatch({
//         type: 'ADD_USER',
//         payload: { id: _.uniqueId(10), username, email, password}
//     })
//   }

//   const deleteUser = id => {
//       dispatch({
//           type: 'DELETE_USER',
//           payload: id
//       })
//   }

//   return { users, addUser, deleteUser }
// }



