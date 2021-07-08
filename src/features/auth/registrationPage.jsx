import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import RegistrationForm from "./registrationForm";
import { useDispatch, useSelector } from "react-redux";
import { register } from './authSlice';

const RegistrationPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const busy = useSelector((state) => state.auth.loading);
    const registered = useSelector((state) => state.auth.registered);

    useEffect(() => {
        if (registered) {
            history.push("/login");
        }
    }, [registered, history]);

    function handleSubmit(event) {
        dispatch(register(event));
    }

    return (
        <div className="absolute w-full h-full bg-red-50 overflow-hidden" >
            <div className="max-w-full md:max-w-4xl mx-auto mt-4 md:mt-28 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                    <div className="hidden md:block w-full h-full bg-origin-border bg-center bg-no-repeat bg-cover" style={{ "backgroundImage": `url('background.png')` }}>
                        <h1 className="font-light text-2xl text-center pt-10">Your trusted partner</h1>
                    </div>

                    <RegistrationForm
                        onSubmit={handleSubmit}
                        loading={busy}
                        error={error}
                    />

                </div>
            </div>
        </div>

    );
}

export default RegistrationPage;