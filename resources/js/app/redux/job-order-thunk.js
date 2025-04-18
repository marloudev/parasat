import {
    create_job_order_service,
    delete_job_order_service,
    get_job_order_service,
    update_job_order_service,
} from "../pages/services/job-order-service";
import { jobOrderSlice } from "./job-order-slice";

export function create_job_order_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_job_order_service(data);
        return res;
    };
}

export function get_job_order_thunk() {
    return async function (dispatch, getState) {
        const res = await get_job_order_service();
        dispatch(jobOrderSlice.actions.setJobOrders(res.data.result));
    };
}

export function update_job_order_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_job_order_service(data);
    };
}

export function delete_job_order_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_job_order_service(id);
    };
}
