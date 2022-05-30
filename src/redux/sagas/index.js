import {takeLatest, call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchScenarioSaga(action) {
    const scenarios = yield call(api.fetchScenarios);
    yield put(action.getScenarios.getScenariosSuccess(scenarios))
}

function* mySaga() {
    yield takeLatest(actions.getScenarios.getScenariosRequest, fetchScenarioSaga)
}

export default mySaga;