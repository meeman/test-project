
const initial = {
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

export default function LoginValidate(values) {
  let errors = {}
  
  let correct = initial.users.some(user => user.username === values.username)
  if (!values.username) {
    errors.username = "Required"
  } else if (!correct){
    errors.username = "Invalid Username"
  } 

  let correct2 = initial.users.some(user => user.password === values.password)
  if (!values.password) {
    errors.password = "Required"
  } else if (!correct2){
      errors.password = "Invalid Password"
  }

  return errors;
};