import { create_internet_plan_service, get_internet_plan_service } from "../pages/services/internet-plan-service";
import { internetPlanSlice } from "./internet-plan-slice";

export function create_internet_plan_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_internet_plan_service(data)

    };
}

export function get_internet_plan_thunk() {
    return async function (dispatch, getState) {
        const res = await get_internet_plan_service()
        dispatch(internetPlanSlice.actions.setInternetPlans(res.data.result));
    };
}