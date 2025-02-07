
import appSlice from '@/app/redux/app-slice';
import internetPlanSlice from '@/app/redux/internet-plan-slice';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        app: appSlice,
        internet_plans: internetPlanSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
