'use client'

import { usePathname } from "next/navigation";
import LogoutBtn from "./LogoutBtn";


const Header = () => {

    const pathname = usePathname();

    return (
        <header className="h-14 bg-white border-b flex items-center justify-between px-4 sticky top-0">
            <div className="font-semibold">
                {
                    pathname == "/shift" ? "Shift Compliance" : pathname == "/clock" ? "Clock in Compliance" : "Home"
                }
            </div>
            <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 hidden sm:inline">Admin</span>
                <LogoutBtn />
            </div>
        </header>
    )
}

export default Header;