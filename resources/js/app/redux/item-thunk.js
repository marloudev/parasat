import { create_item_service, delete_item_service, get_item_by_id_service, get_item_service, update_item_service } from "../pages/services/item-service";
import { itemSlice } from "./item-slice";

export function create_item_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_item_service(data)

    };
}

export function get_item_thunk() {
    return async function (dispatch, getState) {
        const res = await get_item_service()
        dispatch(itemSlice.actions.setItems(res.data.result));
    };
}

export function get_item_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_item_by_id_service(id)
        dispatch(itemSlice.actions.setItem(res.status));
        return res.status
    };
}


export function delete_item_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_item_service(id)
    };
}


export function update_item_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_item_service(data)
    };
}