import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function MainLayout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 p-8 bg-gray-100 min-h-screen overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}