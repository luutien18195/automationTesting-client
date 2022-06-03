import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../../api';
import {ACTION_TYPE} from '../../constant';

function* fetchScenarioSaga(action) {
    try {
        const scenarios = yield call(api.fetchScenarios, action.payload.scenarioName);
        yield put({type: ACTION_TYPE.SCENARIO.SUCCESS, scenarios: scenarios});
    } catch (e) {
        yield put({type: ACTION_TYPE.SCENARIO.FAILED, message: e.message});
    }
}

function* mySaga() {
    yield takeLatest(ACTION_TYPE.SCENARIO.REQUEST, fetchScenarioSaga)
}

export default mySaga;
