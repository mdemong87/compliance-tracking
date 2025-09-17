'use client'

import Link from "next/link";
import { useState } from "react";

const SignUP = () => {

    const [name, setname] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setrole] = useState('Artist');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Email:", email, "Password:", password);
    };


    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center border">
                <h2 className="text-xl font-bold mb-4">Sign UP</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none "
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none "
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none "
                    />

                    <button
                        type="submit"
                        className="w-full bg-gray-300 text-black font-semibold py-2 rounded-md hover:bg-gray-400 transition cursor-pointer"
                    >
                        Sign UP
                    </button>
                </form>


                <span className="flex items-center gap-1 pt-2 justify-center">Already have an account ? <Link href="/signin" className="text-sm text-gray-600 hover:underline text-gray-200">
                    sign IN
                </Link></span>
            </div>
        </div>
    )
}

export default SignUP;