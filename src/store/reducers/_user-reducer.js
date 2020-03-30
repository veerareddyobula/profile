import {asyncFetch} from '../action-types/user-action-types.js';

export const CurrentUser = (state, action) => {
    if (typeof state === 'undefined') {
        return {
            visibilityFilter: true,
            todos: []
        }
    }

    switch(action.type) {
        case asyncFetch.ASYNC_FETCH: 
            return {...state}
        default:
            break; 
    }
}


