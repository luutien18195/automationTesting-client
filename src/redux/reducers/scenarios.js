import {ACTION_TYPE, INIT_STATE} from "../../constant";

export default function scenariosReducers(state = INIT_STATE.scenarios, action) {
    switch(action.type) {
        case ACTION_TYPE.SCENARIO.REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ACTION_TYPE.SCENARIO.SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case ACTION_TYPE.SCENARIO.RESPONSE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}