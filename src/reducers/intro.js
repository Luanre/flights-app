import { INTRO_HANDLE_CHANGE } from '../constants';

export default function introReducer(state = {}, action) {
    switch (action.type) {
        case INTRO_HANDLE_CHANGE:
            return Object.assign({}, state, {
                [action.name]: action.value
            });

        default:
            return state;
    }
}