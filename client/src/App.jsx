import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchGetUser, dispatchLogin, fetchUser } from './redux/actions/authAction';
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";
import Auth from "./components/page/Auth";
import Footer from "./components/layout/Footer";
import Shop from "./components/page/Shop";
import About from "./components/page/About";
import DetailProduct from "./components/page/Shop/DetailProduct";
import ActivationEmail from "./components/page/Auth/ActivationEmail";
import axios from "axios";
import NotFound from "./components/page/NotFound";
import Profile from "./components/page/Profile";
import ForgotPassword from "./components/page/Auth/ForgotPassword";
import ResetPassword from "./components/page/Auth/ResetPassword";

function App() {
  const [isBtnAuth, setIsBtnAuth] = useState(true);
  const handleBtnAuth = (is) => {
    setIsBtnAuth(is)
  }

  const dispatch = useDispatch()

  const token = useSelector(state => state.token)

  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post('/api/v1/user/refresh_token', null)
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token })
      }
      getToken()
    }
  }, [auth.isLogged, dispatch])

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin())
        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  }, [token, dispatch])
  return (
    <div className="app">

      <Header handleBtnAuth={handleBtnAuth} />
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/shop/:productId"
          element={<DetailProduct />}
        />     
        
        {
          !auth.isLogged ? (
            <>
              <Route path="/auth" element={<Auth handleBtnAuth={handleBtnAuth} isBtnAuth={isBtnAuth} />} />
              <Route path="/auth/activate/:activation_token" element={<ActivationEmail handleBtnAuth={handleBtnAuth} />} />
              <Route path="/auth/forgot" element={<ForgotPassword />} />
              <Route path="/auth/reset/:reset_token" element={<ResetPassword />} />
            </>
          ) : (
            <Route path="/profile" element={<Profile />} />
          )
        }


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
