'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Homepage = () => {

    const router = useRouter();


    useEffect(() => {
        setTimeout(() => {
            router.push('/deshboard');
        }, 550);
    }, [])


    return (
        <main className="bg-white w-screen h-screen">
            <div className="w-screen h-screen bg-brand-950 dark:bg-white/5 lg:grid items-center flex items-center justify-center">
                <div className="relative items-center justify-center  flex z-1">
                    <div className="flex flex-col items-center text-black">
                        <Link href="/" className="block mb-4">
                            <h2 className="text-3xl font-bold">My Compliance</h2>
                        </Link>
                        <h2 className="text-xl text-center pt-5 w-screen text-gray-600">
                            Welcome To My Compliance KPI System.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Homepage;