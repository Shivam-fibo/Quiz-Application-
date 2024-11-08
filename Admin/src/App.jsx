
import './App.css'
import AdminLogin from './component/Admin/Auth/AdminLogin'
import AdminHome from './component/Admin/Home/AdminHome'
import AdminQuizSubmission from './component/Admin/Home/AdminQuizSubmissions'

import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExistingQuizzes from './component/Admin/Home/ExistingQuizzes'

function App() {

  return (
   <>
  <BrowserRouter>

    <Routes>
    <Route path='/' element= {<AdminLogin/>} />
    <Route path='/admin' element= {<AdminHome/>}/>
    <Route path = '/result' element = {<AdminQuizSubmission/>} />
    <Route path='/existingquiz' element = {<ExistingQuizzes/>} />
    </Routes>
    <Toaster/>
  </BrowserRouter>
   </>
  )
}

export default App
