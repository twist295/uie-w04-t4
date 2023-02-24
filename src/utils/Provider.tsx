import { useState } from 'react'
import Context from './Context'

type Props = {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => {
  const [setInventory, inventory] = useState([])
  
  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
}

export default Provider
