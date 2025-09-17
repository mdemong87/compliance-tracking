'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Asidebar = () => {

  const pathname = usePathname();


  console.log(pathname);

  return (
    <aside className={`hidden md:flex  flex-col w-full md:w-56 bg-white border-r  h-screen fixed z-50`}>
      <div className="px-4 py-3 font-bold text-lg border-b text-center md:text-left">My Compliance</div>
      <nav className="flex-1 p-3 space-y-1 text-sm overflow-y-auto">
        {[
          {
            name: "Home",
            link: '/'
          },
          {
            name: "Clock in Compliance",
            link: '/clock'
          },
          {
            name: "Shift Compliance",
            link: '/shift'
          },
          {
            name: "Compliance Comparison",
            link: '/comparison'
          }

        ].map((item, i) => (
          <Link
            key={i}
            href={item?.link}
            className={`rounded block px-3 py-2 shadow-lg mb-5 border hover:bg-gray-200 text-center md:text-left ${pathname == item?.link ? "bg-gray-300" : "bg-white"}`}
          >
            {item?.name}
          </Link>
        ))}
      </nav>
      <div className="p-3 border-t text-sm text-center md:text-left flex flex-col">
        Version: v1.0.0
        <span className="text-xs">Develop By <Link href={'https://sardaritbd.com/'} target="blank" className="text-blue-400">Sardar IT</Link></span>
      </div>
    </aside>
  )
}

export default Asidebar;