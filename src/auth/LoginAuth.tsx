import React, { useState } from "react";
import { RiChat1Line, RiWechatChannelsLine } from "react-icons/ri";
import { CgArrowsExchange } from "react-icons/cg";
import { GoVerified } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Imag from "../assets/login_bg.jpg";
import Register from "./RegisterAuth";
import ForgotPassword from "./ForgotpasswordAuth";

const Login: React.FC = () => {
    const [form, setForm] = useState<boolean>(false);
    const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
    const [formValidator, setFormValidator] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",

    });

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value) ? "" : "Invalid email format.";
            case "password":
                return value.length >= 6 ? "" : "Password must be at least 6 characters.";
            default:
                return "";
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormValidator((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value),
        }));
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        const newErrors = {
            email: validateField("email", formValidator.email),
        };
        setErrors(newErrors);

        if (!newErrors.email ) {
            console.log("Logged in successfully!");
        }
    };

    const toggleForm = (): void => {
        setForm(!form);
        setShowForgotPassword(false);
    };

    return (
        <>
            <main className="flex w-full h-screen flex-col md:flex-row">
                <div className="overflow-y-hidden text-black w-full md:w-[35rem]">
                    <div className="flex m-3 justify-between">
                        <h1 className="font-extrabold text-lg">Evento</h1>
                        <div className="underline cursor-pointer" onClick={toggleForm}>
                            {showForgotPassword
                                ? "Back"
                                : form
                                    ? "Go to Login"
                                    : "Register"}
                        </div>
                    </div>

                    <div className="flex items-center align-middle h-screen justify-center w-full">
                        {form ? (
                            <Register />
                        ) : showForgotPassword ? (
                            <ForgotPassword />
                        ) : (
                            <div className="h-auto md:h-[28rem]">
                                <div className="w-80 sm:w-96 flex flex-col gap-5 place-self-center">
                                    <h1 className="text-3xl font-bold">Sign In</h1>
                                    <span>Enter your email and password</span>
                                    <input
                                        name="email"
                                        onChange={handleInputChange}
                                        className="rounded-lg p-2 border-gray-100 focus:border-gray-200"
                                        placeholder="example@gmail.com"
                                    />
                                    {errors.email && (
                                        <span className="text-red-500">{errors.email}</span>
                                    )}
                                    <div className="flex justify-end -mt-3 -mb-4">
                                        <h1
                                            className="text-gray-400 underline text-sm cursor-pointer"
                                            onClick={() => setShowForgotPassword(true)}
                                        >
                                            Forgot password?
                                        </h1>
                                    </div>
                                    <input
                                        name="password"
                                        onChange={handleInputChange}
                                        type="password"
                                        className="rounded-lg p-2 outline-0 border-gray-100 focus:border-gray-200 focus:outline-0 focus:ring-0"
                                        placeholder="password"
                                    />
                                    {errors.password && <span className="text-red-500">{errors.password}</span>}
                                    <div className="flex gap-3">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" name="rememberMe" />
                                            <span>Remember me for 30 days</span>
                                        </label>
                                    </div>
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-[#476ACD] p-2 text-white rounded-lg"
                                    >
                                        Log In
                                    </button>
                                    <div className="flex items-center">
                                        <div className="bg-gray-300 w-20 sm:w-52 h-[1px]" />
                                        <span className="m-1.5 text-sm text-gray-400">OR</span>
                                        <div className="bg-gray-300 w-20 sm:w-52 h-[1px]" />
                                    </div>
                                    <button className="bg-[#EFF2FB] w-full p-2 rounded-lg text-[#476ACD]">
                                        Sign In with Google
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-1 relative h-screen bg-[#1F3474] hidden md:flex">
                    <div className="relative z-10 flex h-full w-full justify-center items-center"
                         style={{userSelect: 'none'}}>
                        <div
                            className="w-80 sm:w-96 p-4 rounded-lg bg-white h-auto sm:h-[29rem] shadow-lg flex flex-col items-center relative"
                            style={{userSelect: 'none'}}>
                            <div
                                className="absolute -top-7 -left-[-1rem] transform -translate-x-1/2 w-24 h-24 bg-white opacity-30 rounded-lg backdrop-filter backdrop-blur-xl"
                                style={{userSelect: 'none'}}></div>
                            <div
                                className="absolute -bottom-10 right-[-7rem] transform -translate-x-1/2 w-24 h-24 bg-white opacity-30 rounded-lg backdrop-filter backdrop-blur-xl"
                                style={{userSelect: 'none'}}></div>

                            <div className="flex gap-3 justify-center" style={{userSelect: 'none'}}>
                                <div className="text-2xl h-fit rounded-lg p-4 bg-black text-white"
                                     style={{userSelect: 'none'}}>
                                    <RiWechatChannelsLine/>
                                </div>
                                <div className="text-gray-300 flex justify-center items-center text-4xl"
                                     style={{userSelect: 'none'}}>
                                    <CgArrowsExchange/>
                                </div>
                                <div className="text-2xl h-fit rounded-lg p-4 bg-[#1f3474] text-white"
                                     style={{userSelect: 'none'}}>
                                    <RiChat1Line/>
                                </div>
                            </div>

                            <div className="mt-8" style={{userSelect: 'none'}}>
                                <div className="text-center" style={{userSelect: 'none'}}>
                                    <h1 className="text-lg font-semibold" style={{userSelect: 'none'}}>Connect Untitled
                                        to linear</h1>
                                    <span className="text-[13px] text-gray-300" style={{userSelect: 'none'}}>Access your account to stay connected and manage your preferences. Enter your credentials</span>
                                    <hr className="mt-3" style={{userSelect: 'none'}}/>
                                </div>
                                <div className="mt-3" style={{userSelect: 'none'}}>
                                    <h1 className="text-[14px] font-semibold" style={{userSelect: 'none'}}>Untitled
                                        would like to</h1>
                                    <div className="mt-2 text-[13px] m-2 text-gray-400 "
                                         style={{userSelect: 'none'}}>
    <span className="mr-2 flex items-center" style={{userSelect: 'none'}}>
    Access to your microphone <GoVerified className="ml-1 text-green-600"/>
    </span>
                                        <br/>
                                        <span className="mr-2 flex items-center" style={{userSelect: 'none'}}>
    Access to your Camera <GoVerified className="ml-1 text-green-600"/>
    </span>
                                        <br/>
                                        <span className="flex items-center" style={{userSelect: 'none'}}>
    Access to your Storage <GoVerified className="ml-1 text-green-600"/>
        </span>
                                    </div>
                                    <hr className="mt-3" style={{userSelect: 'none'}}/>
                                </div>
                                <div className="mt-3 space-y-4" style={{userSelect: 'none'}}>
                                    <button className="bg-[#476ACD] w-full p-2 rounded-lg text-white"
                                            style={{userSelect: 'none'}}>
                                        Allow Access
                                    </button>
                                    <button className="bg-[#EFF2FB] w-full p-2 rounded-lg text-[#476ACD]"
                                            style={{userSelect: 'none'}}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 z-0 w-full h-full">
                        <img src={Imag} alt="hello" className="bg-cover bg-center h-full w-full object-cover"/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Login;