import { create_serial_number_item_service, delete_serial_number_item_service, get_serial_number_item_by_id_service, get_serial_number_item_service, update_serial_number_item_service } from "../pages/services/serial-number-item-service";
import { serialNumberItemSlice } from "./serial-number-item-slice";

export function create_serial_number_item_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_serial_number_item_service(data)

    };
}

export function get_serial_number_item_thunk() {
    return async function (dispatch, getState) {
        const res = await get_serial_number_item_service()
        dispatch(serialNumberItemSlice.actions.setSerialNumberItems(res.data.result));
    };
}

export function get_serial_number_item_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_serial_number_item_by_id_service(id)
        dispatch(serialNumberItemSlice.actions.setSerialNumberItem(res.status));
        return res.status
    };
}


export function delete_serial_number_item_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_serial_number_item_service(id)
    };
}


export function update_serial_number_item_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_serial_number_item_service(data)
    };
}