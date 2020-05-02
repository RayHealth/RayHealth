import React from "react";
import {CommonActions} from "@react-navigation/native";
// import {CommonActions} from "@react-navigation/native";
//
// type IRouteSpec<Route extends string, Params extends object | undefined> = {
//     routeName: Route;
//     params: Params;
// };
// export type RouteSpec = IRouteSpec<RouteNamesWithNoParams, undefined>;

const topLevelNavigatorRef: React.RefObject<any> = React.createRef();

const navigate = (routeName: string, params: {[k: string]: any} = {}) => {
    topLevelNavigatorRef.current.dispatch(
        CommonActions.navigate({
            name: routeName,
            params: params,
        }),
    );
};
const setParams = (newParams: {[k: string]: any} = {}): void =>
    topLevelNavigatorRef.current.dispatch(CommonActions.setParams(newParams));
// const navigateWithParams = (routeSpec: RouteSpec) => {
//     topLevelNavigatorRef.current.dispatch(
//         CommonActions.navigate({
//             name: routeSpec.routeName,
//             params: routeSpec.params,
//         }),
//     );
// };
//
// const push = (routeName: RouteNamesWithNoParams) => {
//     pushWithParams({routeName, params: undefined});
// };
// const pushWithParams = (route: RouteSpec) => {
//     topLevelNavigatorRef.current.dispatch(
//         CommonActions.navigate({name: route.routeName, params: route.params}),
//     );
// };
//
const goBack = () => {
    topLevelNavigatorRef.current.dispatch(
        // this does optionally take a key
        // https://reactnavigation.org/docs/en/navigation-actions.html#back
        CommonActions.goBack(),
    );
};

const NavigationService = {
    navigate,
    // navigateWithParams,
    // push,
    // pushWithParams,
    setParams,
    topLevelNavigatorRef,
    goBack,
};

export default NavigationService;
