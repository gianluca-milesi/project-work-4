import { Outlet } from "react-router-dom"

function BlankLayout() {
    return (
        <main>
            <div>
                <Outlet />
            </div>
        </main>
    )
}

export default BlankLayout