import React, {  useContext , useState } from 'react'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [isOpen1,setIsOpen1] = useState(false)
  return (
    <AppContext.Provider value={{isOpen1,setIsOpen1}}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }