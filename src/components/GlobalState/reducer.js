import { CHANGE_ID_PAGE } from './constants';

const initState = {
    idPage: 1,
};

function reducer(state, action) {
    switch (action.type) {
        case CHANGE_ID_PAGE:
            return {
                ...state,
                idPage: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
export { initState };
