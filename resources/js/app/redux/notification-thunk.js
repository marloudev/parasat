import { create_notification_service, delete_notification_service, get_notification_by_id_service, get_notification_service, update_notification_service } from "../pages/services/notification-service";
import { notificationSlice } from "./notification-slice";


export function create_notification_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_notification_service(data)

    };
}

export function get_notification_thunk() {
    return async function (dispatch, getState) {
        const res = await get_notification_service()
        dispatch(notificationSlice.actions.setNotifications(res.data.result));
    };
}

export function get_notification_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_notification_by_id_service(id)
        dispatch(notificationSlice.actions.setNotification(res.status));
        return res.status
    };
}


export function delete_notification_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_notification_service(id)
    };
}


export function update_notification_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_notification_service(data)
    };
}