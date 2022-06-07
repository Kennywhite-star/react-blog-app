import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

//import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  const user = false;

  return (
    <BrowserRouter>
       <TopBar />
       <Routes>
       <Route exact path='/' element={<Home />} />
       <Route path='register' element={user ? <Home/> :<Register />} />2
       <Route path='login' element={user ? <Home/> :<Login />} />
       <Route path='write' element={ <Write />    /*user ? <Write /> : <Register/>*/ } />
       <Route path='settings' element={ <Settings /> /*user ? <Settings />: <Register/>*/ } />
       <Route path='post/:postId' element={<Single />} />       
      </Routes>
   </BrowserRouter> 
  )
}

export default App

//if user is true go to write page /....if user is false go to register page.