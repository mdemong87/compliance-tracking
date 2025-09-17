'use client'

import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import LogoutBtn from "./LogoutBtn";


const Header = () => {

    const pathname = usePathname();

    return (
        <header className="h-14 bg-white border-b flex items-center justify-between px-4 sticky top-0 z-50">
            <div className="hidden md:block font-semibold">
                {
                    pathname == "/shift" ? "Shift Compliance" : pathname == "/clock" ? "Clock in Compliance" : "Home"
                }
            </div>
            <div className="md:hidden px-1 py-3 font-bold text-lg text-center md:text-left">My Compliance</div>

            <div className="hidden md:flex items-center gap-3">
                <span className="text-sm text-gray-600 hidden sm:inline">Admin</span>
                <LogoutBtn />
            </div>
            <div className="md:hidden">
                <FaBars className="text-xl cursor-pointer" />
            </div>
        </header>
    )
}

export default Header;