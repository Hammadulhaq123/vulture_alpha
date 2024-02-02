import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import routes from './routes/routes'
import Login from './pages/Login'
import Register from './pages/Register'
import PreLoader from './components/PreLoader'
import VerifyEmail from './pages/VerifyEmail'
import VerifyOtp from './pages/VerifyOtp'
import ChangePassword from './pages/ChangePassword'

function App() {


  return (
    <Router>
      {/* <PreLoader /> */}
      <Routes>
        <Route path='/' element={
          <>
            <Home />
          </>
        }>
        </Route>
        <Route path='/auth/login/' element={
          <Login />
        }>
        </Route>
        <Route path='/auth/verify-email/' element={
          <VerifyEmail />
        }>
        </Route>
        <Route path='/auth/verify-otp/' element={
          <VerifyOtp />
        }>
        </Route>
        <Route path='/auth/change-password/' element={
          <ChangePassword />
        }>
        </Route>
        <Route path='/auth/register/' element={
          <Register />
        }>
        </Route>
        {
          routes.map((route, key) => {
            return (
              <Route key={key} path={`${route.to}`} element={
                <Layout page={route.page} title={route.title} />
              }>
              </Route>
            )
          })
        }



      </Routes>
    </Router>
  )
}

export default App
