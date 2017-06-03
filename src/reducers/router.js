import {
    CHANGE_ROUTE
} from '../constants';

export default function routerReducer(state = {}, action) {

    switch (action.type) {
        case CHANGE_ROUTE:
            let component = action.path || 'Intro';

            return Object.assign({}, state, {
                component
            });

        default:
            return state;

    }
}