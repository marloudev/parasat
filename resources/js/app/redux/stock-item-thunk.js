import { create_stock_item_service, delete_stock_item_service, get_stock_item_by_id_service, get_stock_item_service, update_stock_item_service } from "../pages/services/stock-item-service";
import { stockItemSlice } from "./stock-item-slice";

export function create_stock_item_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_stock_item_service(data)

    };
}

export function get_stock_item_thunk() {
    return async function (dispatch, getState) {
        const res = await get_stock_item_service()
        dispatch(stockItemSlice.actions.setStockItems(res.data.result));
    };
}

export function get_stock_item_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_stock_item_by_id_service(id)
        dispatch(stockItemSlice.actions.setStockItem(res.status));
        return res.status
    };
}


export function delete_stock_item_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_stock_item_service(id)
    };
}


export function update_stock_item_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_stock_item_service(data)
    };
}