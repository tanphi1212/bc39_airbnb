import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actAuthLogin } from './duck/actions';
import { Navigate, useNavigate } from 'react-router-dom';

export default function LoginAdminPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const props = useSelector((state) => state.authLoginReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [name]: value
        })
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(actAuthLogin(user,navigate));

    };

    const renderNoti = () => {
        const { error } = props;
        return (
            error && (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                     {error.response.data.content}
                </div>

            )
        );
    };
    if(localStorage.getItem("UserAdmin")){
        return <Navigate replace to ='/admin/user' />
    }

    return (
        <div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100 text-gray-800 mx-auto mt-20">
                <h1 className="text-2xl font-bold text-center">LOGIN</h1>
                {renderNoti()}
                <form onSubmit={handleSumbit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-600">Email</label>
                        <input type="text" onChange={handleOnChange} name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" onChange={handleOnChange} name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
                        <div className="flex justify-end text-xs text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-blue-600">Sign in</button>
                </form>
            </div>
        </div>

    )
}
