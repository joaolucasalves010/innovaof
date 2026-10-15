import { createContext, useState } from "react";
import {type ReactNode } from 'react'

export interface LoadingContextType {
  loaded: boolean,
  setLoaded: (loaded: boolean) => void
}

export const LoadingContext = createContext<LoadingContextType | null>(null)

const LoadingProvider = ({children}: {children: ReactNode}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <LoadingContext.Provider value={{setLoaded, loaded}}>
      {children}
    </LoadingContext.Provider>
  )

}

export default LoadingProvider