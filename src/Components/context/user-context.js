import React, { useReducer, createContext } from 'react'


export const UserContext = createContext()

// initial state 
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

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
        return {
            users: [...state.users, action.payload]
        }
    case 'DELETE_USER':
        return {
            users: state.users.filter(
                user => user.id !== action.payload
            )
        }
    default:
        return state
  }
}

export const UserContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

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



