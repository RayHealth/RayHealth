import {IAppState, rnAppStateInitialState, SCREEN_CHANGE} from "./constants";
import {ITriggerScreenChangeAction} from "./actions";

const rnAppStateReducer = (
    state: IAppState = rnAppStateInitialState,
    action: ITriggerScreenChangeAction,
): IAppState => {
    switch (action.type) {
        case SCREEN_CHANGE:
            return {
                ...state,
                currentScreenPath: action.currentRouteName,
            };
        default:
            return state;
    }
};

export default rnAppStateReducer;
