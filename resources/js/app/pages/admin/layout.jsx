import { useEffect } from "react";
import SidebarSection from "../_section/sidebar-section";
import TopbarSection from "../_section/topbar-section";
import Pusher from "pusher-js";
import { useDispatch } from "react-redux";
import store from "../store/store";
import { get_notification_thunk } from "@/app/redux/notification-thunk";

export default function AdminLayout({ children }) {
    const dispatch = useDispatch();

    async function get_notification(params) {
        await store.dispatch(get_notification_thunk());
    }
    useEffect(() => {
        get_notification();
    }, []);
    useEffect(() => {
        Pusher.logToConsole = true;

        const pusher = new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
            cluster: "ap1",
        });

        const channel = pusher.subscribe("my-channel");

        const handleNotification = (data) => {
            alert()
            get_notification();
        };

        channel.bind("my-event", handleNotification);
        return () => {
            pusher.unsubscribe("my-channel");
        };
    }, [dispatch]);
    return (
        <>
            <div className="bg-slate-200 h-screen">
                <div>
                    <SidebarSection />
                </div>
                <div className="lg:pl-72">
                    <TopbarSection />

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}
