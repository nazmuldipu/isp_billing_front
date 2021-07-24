import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from './authSlice';
import LoginForm from './loginForm';

const LoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const busy = useSelector((state) => state.auth.loading);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            history.push("/dashboard");
        }
    }, [token, history]);

    function handleSubmit(event) {
        dispatch(login(event));
    }

    return (
        <div className="my-auto relative flex flex-col min-h-screen bg-red-50" >
            <div className="p-5 flex flex-1 items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl">
                    <div className="hidden md:block w-full h-full bg-origin-border bg-center bg-no-repeat bg-cover" style={{ "backgroundImage": `url('background.png')` }}>
                        <h1 className="font-light text-2xl text-center pt-10">Your trusted partner</h1>
                    </div>
                    <div className="w-full bg-white p-4 md:p-12">
                        <LoginForm
                            onSubmit={handleSubmit}
                            loading={busy}
                            error={error} />                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;