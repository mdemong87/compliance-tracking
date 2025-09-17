'use client'

import { useRouter } from "next/navigation";


const LogoutBtn = () => {

    const router = useRouter();

    function handleLogout() {
        router.push('/signin');
    }


    return (
        <button onClick={() => { handleLogout() }} className="text-sm px-3 py-1 border rounded cursor-pointer">Logout</button>
    )
}

export default LogoutBtn;