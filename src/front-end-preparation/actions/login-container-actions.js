export const FRONT_END_LOGIN_SUCCESS = 'FRONT_END_LOGIN_SUCCESS'

export const onFrontEndPreparationLogin = params => async dispatch => {
  localStorage.setItem('user', JSON.stringify(params));
  dispatch({
    type: FRONT_END_LOGIN_SUCCESS,
    payload: { status: 200, data: params }
  });
};

export const frontEndLoginData = (state = {}, action) => {
    console.log('--=== Curd Reducer --== ', state, action);
    switch (action.type) {
        case FRONT_END_LOGIN_SUCCESS:
        return action.payload;
        default:
        return state;
    }
}
