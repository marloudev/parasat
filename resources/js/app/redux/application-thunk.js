import { create_application_service, delete_application_service, get_application_service, update_application_service } from "../pages/services/application-service";
import { applicationSlice } from "./application-slice";

export function create_application_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_application_service(data)
        return res
    };
}

export function get_application_thunk() {
    return async function (dispatch, getState) {
        const res = await get_application_service()
        dispatch(applicationSlice.actions.setApplications(res.data.result));
    };
}

export function update_application_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_application_service(data)
    };
}

export function delete_application_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_application_service(id)
    };
}