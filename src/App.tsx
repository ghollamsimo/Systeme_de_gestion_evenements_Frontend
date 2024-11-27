import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./auth/LoginAuth.tsx";
import {HomePage} from "./pages/HomePage.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path='/home' element={<HomePage/>}/>
        </Routes>
    </>
  )
}

export default App
