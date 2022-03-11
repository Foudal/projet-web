import './style.css';
import { useState } from 'react'

function Login() {
    const [showForm, setShowForm] = useState(false)

    const show = () => {
        setShowForm(!showForm)
    }

    return (
        <li className="login-link">
            <button className="login-btn" onClick={show}>
                Login
            </button>
                { showForm && (
                    <LoginForm click={show} />
                )
            }
        </li>
    );
}

function LoginForm(props) {

  return (
    <div className="login-form">
        <button className='log-close-btn' onClick={props.click}></button>
        <form className='login-box' name="login-box" target="#here" method="post">
            <label htmlFor='user-id'>
                Username
            </label>
            <input name="username" type="text" id='user-id'/>

            <label htmlFor='password'>
                Password
            </label>
            <input name="password" type="password" id='password'/>

            <input type="submit" />
        </form>
    </div>
  );
}

export default Login;