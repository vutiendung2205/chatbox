const initReducer = {
    data : [],
    username : "",
    redirect : false,
    isShowModal : false,
    contentModal : '',
    isSuccess : false,
}

export const reducer = ( state = initReducer, action ) => {
    switch (action.type) {
        case 'FETCH_DATA' : {
            return {...state, data : action.data}
        };
        case 'IS_REDIRECT_TO_HOME': {
            return {...state,redirect : true}
        };
        case 'IS_REDIRECT_TO_LOGIN': {
            return {...state,redirect : false}
        };
        case 'GET_USER_NAME' : {
            return {...state, username : action.username}
        };
        case 'IS_SHOW_MODAL' : {
            return {...state, isShowModal : !state.isShowModal}
        };
        case 'CONTENT_MODAL' : {
            return {...state, contentModal : action.contentModal}
        }
        default : return state
    }
  }