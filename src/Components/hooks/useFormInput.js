import {useState} from 'react'


export default function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }
  
  const handleReset = () => {
    setValue('')
  }

  return {
    value,
    onChange: handleChange,
    onReset: handleReset
  }
}



