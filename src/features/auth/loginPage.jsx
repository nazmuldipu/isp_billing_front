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
        <div className="absolute w-full h-full bg-red-50 overflow-hidden" >
            <div className="max-w-full md:max-w-4xl mx-auto mt-10 md:mt-28 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
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