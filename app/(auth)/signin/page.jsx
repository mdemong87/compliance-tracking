'use client'

import Loading from "@/app/componnent/Loading";
import useLoadingStore from "@/store/useLoadingStore";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {

    const { isLoading, setisLoading } = useLoadingStore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setrole] = useState('Artist');

    const handleSubmit = async (e) => {
        e.preventDefault();


        const formdata = {
            email,
            password
        }

        console.log("Email:", email, "Password:", password);
    };


    return (
        <div className="w-screen h-screen flex items-center justify-center">
            {isLoading && <Loading />}
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center border">
                <h2 className="text-xl font-bold mb-4">Sign IN</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                        Login
                    </button>
                </form>

                <Link href="#" className="block mt-3 text-sm text-gray-600 hover:underline">
                    Forget Password
                </Link>

                <span className="flex items-center gap-1 pt-2 justify-center">Did not have an account ? <Link href="/signup" className="text-sm text-gray-600 hover:underline text-gray-200">
                    sign Up
                </Link></span>
            </div>
        </div>
    )
}

export default SignIn;