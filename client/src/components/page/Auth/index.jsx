import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { showErr, showSuccsess } from "../../../utils/Notification";
import { dispatchLogin } from "../../../redux/actions/authAction";
import { isEmail, isLength, isEmpty, isMatch } from "../../../utils/Validation";
import "./styles.scss";


const initialState = {
    name: "",
    email: "",
    password: "",
    cf_password: "",
    err: "",
    success: ""
}

const Auth = ({ isBtnAuth, handleBtnAuth }) => {

    const [user, setUser] = useState(initialState)

    const dispatch = useDispatch()

    const history = useNavigate()

    const { name, email, password, cf_password, err, success } = user

    const handleChangeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value, err: '', success: '' })
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/user/login', { email, password })
            setUser({ ...user, err: '', success: res.data.msg })

            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            history("/", { replace: true })
        } catch (err) {
            err.response.data.msg && setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    const handleResgiterSubmit = async (e) => {
        e.preventDefault()
        if (isEmpty(name) || isEmpty(password))
            return setUser({ ...user, err: "Please fill in all fields.", success: '' })
        if (!isEmail(email))
            return setUser({ ...user, err: "Invalid emails.", success: '' })

        if (isLength(password))
            return setUser({ ...user, err: "Password must be at least 6 characters.", success: '' })

        if (!isMatch(password, cf_password))
            return setUser({ ...user, err: "Password did not match.", success: '' })

        try {

            const res = await axios.post('/api/v1/user/register', {
                name, email, password
            })

            setUser({ ...user, err: "", success: res.data.msg })


        } catch (err) {
            err.response.data.msg && setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }


    return (
        <div className="c-auth">
            <div className={"c-auth__inner" + (isBtnAuth ? " active" : "")}>
                {err && showErr(err)}
                {success && showSuccsess(success)}
                <div className="signup">
                    <form onSubmit={handleResgiterSubmit}>
                        <label htmlFor="chk" aria-hidden="true" onClick={() => handleBtnAuth(false)}>Sign up</label>
                        <input type="text" name="name" placeholder="User name" onChange={handleChangeInput} value={name} />
                        <input type="email" name="email" placeholder="Email" onChange={handleChangeInput} value={email} />
                        <input type="password" name="password" placeholder="Password" autoComplete="on" onChange={handleChangeInput} value={password} />
                        <input type="password" name="cf_password" placeholder="Confirm password" autoComplete="on" onChange={handleChangeInput} value={cf_password} />
                        <button>Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <form onSubmit={handleLoginSubmit}>
                        <label htmlFor="chk" aria-hidden="true" onClick={() => handleBtnAuth(true)}>Login</label>
                        <input type="email" name="email" placeholder="Email" onChange={handleChangeInput} value={email} />
                        <input type="password" name="password" placeholder="Password" autoComplete="on" onChange={handleChangeInput} value={password} />
                        <button>Login</button>
                    </form>
                    <div className="forgot_password">
                        <Link to={"/auth/forgot"}>Forgot password</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
