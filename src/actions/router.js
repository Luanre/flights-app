/*eslint no-restricted-globals: 0 */

import { CHANGE_ROUTE } from '../constants';

export const changeRoute = (path) => {
    path = path || 'Intro';
    location.href = `#${path}`;

    return {
        type: CHANGE_ROUTE,
        path
    }
};