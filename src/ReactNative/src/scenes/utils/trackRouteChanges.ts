import {triggerScreenChange} from "../../store/models/appState/actions";
import {Dispatch} from "redux";

const getActiveRouteName = (state): string => {
    if (!state) return "";
    const route = state.routes[state.index];
    if (route.state) {
        // Dive into nested navigators
        return getActiveRouteName(route.state);
    }
    return route.name;
};
export const trackRouteChanges = (routeNameRef: any, dispatch: Dispatch<any>, state) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);
    if (currentRouteName && previousRouteName !== currentRouteName) {
        console.log("Route Changed to => ", currentRouteName);
        dispatch(triggerScreenChange(currentRouteName));
    }
    // Save the current route name for later comparision
    routeNameRef.current = currentRouteName;
};
