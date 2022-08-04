import { useState, SyntheticEvent } from "react";
import {  Navigate } from "react-router-dom";
import { LoggedInUserType } from "../models/logged-in-user";

interface ILoginProps {
    currentUser: LoggedInUserType | undefined,
    setCurrentUser: (nextUser: LoggedInUserType) => void
}


function Login(props: ILoginProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState<string>();

    let updateEmail = (e: SyntheticEvent) => {
        setEmail((e.target as HTMLInputElement).value);
    }

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);
    }

    let handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (!email || !password) {
            setErrorMsg('You must provide a username and a password!');
        } else {
            setErrorMsg('welcome ' + email);
        }

        try {
            let resp = await fetch('http://localhost:8080/auth'
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                })

            if (resp.status !== 200) {
                setErrorMsg('Could not validate provided credentials!');
            } else {
                props.setCurrentUser(await resp.json())
            }
        } catch (err) {
            setErrorMsg('There was an error communicating with the API');
        }
    }



    return (
        props.currentUser ? <Navigate to="/" /> :
            <div className="login">
                <div className="login_gradient">
                    <form
                        onSubmit={handleSubmit}>
                        <input type='text'
                            placeholder='Email Address'
                            name="email"
                            onChange={updateEmail}
                        />
                        <input type='password'
                            placeholder='Password'
                            name="password"
                            onChange={updatePassword}
                        />
                        <button
                            className='login_getStarted'>Login</button>
                    </form>
                    {errorMsg ?
                        <div>{errorMsg}</div>
                        :
                        <div></div>
                    }
                </div>
            </div>
    )
}


export default Login;