import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"

export function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </Router>
  )
}

export default App