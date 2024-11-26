import React, { useState } from "react";

const Register: React.FC = () => {
    const [formValidator, setFormValidator] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    });

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case "name":
                return value.trim() ? "" : "Name is required.";
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value) ? "" : "Invalid email format.";
            case "password":
                return value.length >= 6 ? "" : "Password must be at least 6 characters.";
            default:
                return "";
        }
    };

    const handleInputChange = (e): void => {
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

    const handleSubmit = (e): void => {
        e.preventDefault();
        const newErrors = {
            name: validateField("name", formValidator.name),
            email: validateField("email", formValidator.email),
            password: validateField("password", formValidator.password),
        };
        setErrors(newErrors);

        if (!Object.values(newErrors).some((error) => error)) {
            console.log("Form submitted");
        }
    };

    return (
        <div className="bg-white h-auto md:h-[35rem]">
            <form className="w-80 sm:w-96 flex flex-col gap-5 m-6 place-self-center" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <span>Enter your email and password</span>

                <input
                    name="name"
                    value={formValidator.name}
                    onChange={handleInputChange}
                    className="rounded-lg p-2 outline-0 border-gray-100 focus:border-gray-200 focus:outline-0 focus:ring-0"
                    placeholder="Name..."
                />
                {errors.name && <span className="text-red-500">{errors.name}</span>}

                <input
                    name="email"
                    value={formValidator.email}
                    onChange={handleInputChange}
                    className="rounded-lg p-2 outline-0 border-gray-100 focus:border-gray-200 focus:outline-0 focus:ring-0"
                    placeholder="example@gmail.com"
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}

                <input
                    name="password"
                    type="password"
                    value={formValidator.password}
                    onChange={handleInputChange}
                    className="rounded-lg p-2 outline-0 border-gray-100 focus:border-gray-200 focus:outline-0 focus:ring-0"
                    placeholder="Password"
                />
                {errors.password && <span className="text-red-500">{errors.password}</span>}

                <div className="flex gap-3">
                    <label className="label">
                        <div className="toggle text-white bg-[#476ACD]">
                            <input
                                className="toggle-state text-white"
                                type="checkbox"
                                name="remember"
                            />
                            <div className="indicator"/>
                        </div>
                    </label>
                    <span className="flex justify-center items-center">Remember me for 30 days</span>
                </div>

                <button type="submit" className="bg-[#476ACD] p-2 text-white rounded-lg">Register</button>
            </form>
        </div>
    );
};

export default Register;