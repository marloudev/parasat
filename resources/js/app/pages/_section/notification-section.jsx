import { BellIcon } from "@heroicons/react/24/outline";
import { router } from "@inertiajs/react";
import { Dropdown, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import store from "../store/store";
import { update_notification_thunk } from "@/app/redux/notification-thunk";

export default function NotificationSection() {
    const { notifications } = useSelector((state) => state.notification);
    const count = notifications.length;

    const items = notifications.map((res) => ({
        key: res?.id,
        label: (
            <u>
                {`${res?.application?.fname} ${res?.application?.lname} has a new application`}
            </u>
        ),
        onClick: async () => {
            await store.dispatch(
                update_notification_thunk({
                    ...res,
                    status: "read",
                })
            );
            window.location.href = `/administrator/application?search=${res?.application?.id}`;
        },
    }));

    return (
        <Dropdown
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
            menu={{ items }}
            trigger={["click"]}
        >
            <div
                className="relative -m-2.5 p-2.5 text-gray-400 hover:text-gray-500 cursor-pointer"
                onClick={(e) => e.preventDefault()}
            >
                <span className="sr-only">View notifications</span>
                <Space>
                    <BellIcon aria-hidden="true" className="size-6" />
                </Space>
                {count > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1">
                        {count}
                    </div>
                )}
            </div>
        </Dropdown>
    );
}
