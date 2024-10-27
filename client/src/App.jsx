import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Footer from './components/Footer'



import './App.css'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import Post from './pages/Post'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          {/* <Route element={<OnlyAdminPrivateRoute />}> */}
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post/:postId' element={<UpdatePost />} />

          {/* </Route> */}
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Post />} />
          {/* <Route path="" element={ } /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
