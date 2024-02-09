import { TextField } from '@mui/material'
import React from 'react'

const InputComponents = (props) => {
    const {placeholder,type,id,onChange,required } =props
  return (
    <div>
      <TextField placeholder={placeholder} required={required} onChange={onChange} id={id} type={type} />
    </div>
  )
}

export default InputComponents
