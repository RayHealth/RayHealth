import {
    AppStateActions,
    IAppState,
    rnAppStateInitialState,
    SCREEN_CHANGE,
} from "./constants";
import {getRouteOptionsFromPath} from "../../../scenes/router/constants";

const rnAppStateReducer = (
    state: IAppState = rnAppStateInitialState,
    action: AppStateActions,
): IAppState => {
    switch (action.type) {
        case SCREEN_CHANGE:
            return {
                ...state,
                currentScreenPath: action.currentRouteName,
                backgroundColor:
                    getRouteOptionsFromPath(action.currentRouteName).backgroundColor ||
                    rnAppStateInitialState.backgroundColor,
            };
        default:
            return state;
    }
};

export default rnAppStateReducer;
