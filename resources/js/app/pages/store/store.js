
import appSlice from '@/app/redux/app-slice';
import applicationSlice from '@/app/redux/application-slice';
import internetPlanSlice from '@/app/redux/internet-plan-slice';
import { configureStore } from '@reduxjs/toolkit';
import  itemSlice from '@/app/redux/item-slice';
import serialNumberItemSlice  from '@/app/redux/serial-number-item-slice';
import stockItemSlice from '@/app/redux/stock-item-slice';
import requestItemSlice  from '@/app/redux/request-item-slice';
import { notification } from 'antd';
import notificationSlice  from '@/app/redux/notification-slice';
import jobOrderSlice  from '@/app/redux/job-order-slice';

const store = configureStore({
    reducer: {
        app: appSlice,
        internet_plans: internetPlanSlice,
        applications: applicationSlice,
        items: itemSlice,
        serial_number_items: serialNumberItemSlice,
        stock_items:stockItemSlice,
        request_items:requestItemSlice,
        notification:notificationSlice,
        job_order:jobOrderSlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
