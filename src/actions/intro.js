import { INTRO_HANDLE_CHANGE, INTRO_SUBMIT } from '../constants';
import { changeRoute } from './router';

export const handleChange = event => ({
    type: INTRO_HANDLE_CHANGE,
    value: event.target.value,
    name: event.target.name
});

export const submit = dispatch => {
    dispatch(changeRoute('Results'));
    return { type: INTRO_SUBMIT };
};