import { create_request_item_service, delete_request_item_service, get_request_item_by_id_service, get_request_item_service, update_change_status_service, update_request_item_service } from "../pages/services/request-item-service";
import { requestItemSlice } from "./request-item-slice";


export function update_change_status_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_change_status_service(data)

    };
}
export function create_request_item_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_request_item_service(data)

    };
}

export function get_request_item_thunk() {
    return async function (dispatch, getState) {
        const res = await get_request_item_service()
        dispatch(requestItemSlice.actions.setRequestItems(res.data.result));
    };
}

export function get_request_item_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_request_item_by_id_service(id)
        dispatch(requestItemSlice.actions.setRequestItem(res.status));
        return res.status
    };
}


export function delete_request_item_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_request_item_service(id)
    };
}


export function update_request_item_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_request_item_service(data)
    };
}