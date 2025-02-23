import { message } from 'antd';
import { send_email_service } from '../pages/services/email-service';
import { create_user_service, delete_user_service, get_user_by_id_service, get_user_service, get_users_service, update_user_service } from '../pages/services/user-service';
import { appSlice } from './app-slice';
import axios from 'axios';


export function get_user_thunk() {
    return async function (dispatch, getState) {
        const res = await get_user_service()
        dispatch(appSlice.actions.setUser(res.data));
        return res
    };
}

// export function get_user_login_thunk() {
//     return async function (dispatch, getState) {
//         const res = await get_user_login_service(3)
//         dispatch(appSlice.actions.setUser(res));
//         return res
//     }
// }

export function create_user_thunk(data) {
    return async function (dispatch, getState) {
        const res = await create_user_service(data)

    };
}

export function get_users_thunk() {
    return async function (dispatch, getState) {
        const res = await get_users_service()
        dispatch(appSlice.actions.setUsers(res.data.status));
    };
}

export function get_user_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_user_by_id_service(id)
        dispatch(appSlice.actions.setUser(res.status));
        return res.status
    };
}


export function delete_user_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_user_service(id)
    };
}


export function update_user_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_user_service(data)
    };
}


export const send_email_thunk = (emailData) => async (dispatch) => {
    try {
        // Make a POST request to the API with email data
        const response = await axios.post('/api/send_email', emailData);

        // Handle the success (e.g., dispatch success action)
        dispatch({ type: 'SEND_EMAIL_SUCCESS', payload: response.data });
    } catch (error) {
        // Handle any errors (e.g., dispatch error action)
        dispatch({ type: 'SEND_EMAIL_FAILURE', payload: error.message });
    }
};


