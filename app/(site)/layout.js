import PostLayout from "../componnent/layout/PostLayout";

const Applayout = ({ children }) => {
    return (
        <div>
            <PostLayout>
                {children}
            </PostLayout>
        </div>
    )
}

export default Applayout;