import * as React from "react";
import {useDispatch} from "react-redux";
import AppStackNavigatorContainer from "./appStackRoutes";
import {NavigationContainer} from "@react-navigation/native";
import NavigationService from "../../services/navigationService";
import {trackRouteChanges} from "../utils/trackRouteChanges";
import useInitialState from "../../services/useInitialState";
import {BasePageSafeAreaView, KeyboardAvoidingViewStyle} from "../appStack/styles";
import {KeyboardAvoidingView} from "react-native";

const App: React.FC = () => {
    const routeNameRef = React.useRef();
    const dispatch = useDispatch();
    const [isReady, initialState] = useInitialState();
    const onStateChange = React.useCallback(
        (state) => trackRouteChanges(routeNameRef, dispatch, state),
        [routeNameRef, dispatch],
    );
    if (!isReady) return null;
    // todo re-hook up persistence https://reactnavigation.org/docs/en/next/state-persistence.html#docsNav
    return (
        <KeyboardAvoidingView behavior="height" style={KeyboardAvoidingViewStyle}>
            <NavigationContainer
                ref={NavigationService.topLevelNavigatorRef}
                initialState={initialState}
                independent={true}
                onStateChange={onStateChange}>
                <BasePageSafeAreaView>
                    <AppStackNavigatorContainer />
                </BasePageSafeAreaView>
            </NavigationContainer>
        </KeyboardAvoidingView>
    );
};
export default App;
