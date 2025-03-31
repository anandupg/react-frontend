import { BrowserRouter , Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contact'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contacts/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
