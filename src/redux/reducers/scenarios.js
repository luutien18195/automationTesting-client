import {INIT_STATE} from "../../constant";
import {getScenarios, getType} from "../actions";

export default function scenariosReducers(state = INIT_STATE.scenarios, action) {
    switch(action.type) {
        case getType(getScenarios.getScenariosRequest):
            return {
                ...state,
                isLoading: true
            }
        case getType(getScenarios.getScenariosSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getScenarios.getScenariosFailure):
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}