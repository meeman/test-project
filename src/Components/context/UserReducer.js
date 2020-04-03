
export default (state, action) => {
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