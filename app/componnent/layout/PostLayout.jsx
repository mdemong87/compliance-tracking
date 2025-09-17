import Asidebar from "../Asidebar";
import Header from "../Header";

function PostLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-800 ">
            <Asidebar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col pl-0 md:pl-56">
                {/* Topbar */}
                <Header />
                {/* Page Content */}
                {children}
            </div>
        </div>
    );
}

export default PostLayout;