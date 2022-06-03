import {ACTION_TYPE} from "../constant";

class ScenarioComponent extends React.Component {
    onGetAllScenario() {
        const {scenarioName, dispatch} = this.props;
        console.log('prop', this.props);
        dispatchEvent({type: ACTION_TYPE.SCENARIO.REQUEST, payload: {scenarioName}})
    }
}
