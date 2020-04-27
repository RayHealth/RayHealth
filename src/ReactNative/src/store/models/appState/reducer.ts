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
            if (state.currentScreenPath === action.currentRouteName) return state;
            console.log("Route Changed to => ", action.currentRouteName);
            return {
                ...state,
                currentScreenPath: action.currentRouteName,
                background: {
                    header:
                        getRouteOptionsFromPath(action.currentRouteName).style
                            ?.headerBg || rnAppStateInitialState.background.header,
                    body:
                        getRouteOptionsFromPath(action.currentRouteName).style?.bodyBg ||
                        rnAppStateInitialState.background.body,
                    footer:
                        getRouteOptionsFromPath(action.currentRouteName).style
                            ?.footerBg || rnAppStateInitialState.background.footer,
                },
            };
        default:
            return state;
    }
};

export default rnAppStateReducer;
