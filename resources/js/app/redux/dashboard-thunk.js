import dashboardSlice from './dashboard-slice';

export function dashboard_thunk(id) {
  return async function (dispatch, getState) {
    dispatch(dashboardSlice.actions.incrementByAmount(10));

  };
}
