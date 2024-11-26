import React from "react";

const ForgotPassword: React.FC = () => {
    return(
        <div className={'h-[20rem]'}>
            <div className="w-80 sm:w-96 flex flex-col gap-5 place-self-center">
                <h1 className="text-3xl font-bold">Forgot Password</h1>
                <span>Enter your email to reset your password</span>
                <input
                    name="email"
                    className="rounded-lg p-2 outline-0 border-gray-100 focus:border-gray-200 focus:outline-0 focus:ring-0"
                    placeholder="example@gmail.com"
                />
                <button className="bg-[#476ACD] p-2 text-white rounded-lg">
                    Reset Password
                </button>
            </div>
        </div>
    )
}

export default ForgotPassword