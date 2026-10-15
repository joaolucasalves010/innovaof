import {Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import ErrorPage from "../src/pages/ErrorPage"


export function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ErrorPage />} path="*"/>
    </Routes>
  )
}

export default App
