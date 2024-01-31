
import Homepage from './pages/Homepage/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegitsterPage'
function App() {

  return (
    <div className="main-ctn">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
