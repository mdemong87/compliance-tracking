'use client'

import setCookie from "@/utilis/cookie/setcookie";
import { useRouter } from "next/navigation";


const LogoutBtn = () => {

    const router = useRouter();

    function handleLogout() {


        setCookie('token', '');
        setCookie('name', '');
        setCookie('email', '');
        setCookie('role', '');
        setCookie('id', '');

        router.push('/signin');
    }


    return (
        <button onClick={() => { handleLogout() }} className="text-sm px-3 py-1 border rounded cursor-pointer">Logout</button>
    )
}

export default LogoutBtn;