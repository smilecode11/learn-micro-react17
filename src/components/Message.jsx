
import { useState } from 'react'

export const Message = () => {
    const [message, ] = useState('This is a react 17 project.')
    return <div>{message}</div>
}
