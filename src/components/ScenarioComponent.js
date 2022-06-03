import {ACTION_TYPE} from "../constant";

class Scenarios extends React.Component {
    onGetAllScenario() {
        const {scenarioName, dispatch} = this.props;
        console.log('prop', this.props);
        dispatchEvent({type: ACTION_TYPE.SCENARIO.REQUEST, payload: {scenarioName}})
    }
}
