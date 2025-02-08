import { create_application_service } from "../pages/services/application-service";

export function create_application_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_application_service(data)

    };
}