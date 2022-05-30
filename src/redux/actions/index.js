import {createAction} from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getScenarios = createAction({
    getScenariosRequest: undefined,
    getScenariosSuccess: (payload) => payload,
    getScenariosFailure: (err) => err
});