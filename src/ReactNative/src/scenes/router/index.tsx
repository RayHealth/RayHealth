import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import AppStackNavigatorContainer from "./appStackRoutes";
import {NavigationContainer} from "@react-navigation/native";
import NavigationService from "../../services/navigationService";
import {trackRouteChanges} from "../utils/trackRouteChanges";
import useInitialState from "../../services/useInitialState";
import {KeyboardAvoidingView} from "react-native";
import {getBackgroundColor} from "../../store/models/appState/accessors";
import styled from "styled-components/native";

const App: React.FC = React.memo(() => {
    const routeNameRef = React.useRef();
    const dispatch = useDispatch();
    const [isReady, initialState] = useInitialState();
    const onStateChange = React.useCallback(
        (state) => trackRouteChanges(routeNameRef, dispatch, state),
        [routeNameRef, dispatch],
    );
    const backgroundColor = useSelector(getBackgroundColor);

    if (!isReady) return null;
    // todo re-hook up persistence https://reactnavigation.org/docs/en/next/state-persistence.html#docsNav
    return (
        <KeyboardAvoidingView
            behavior="height"
            style={{
                flex: 1,
                backgroundColor,
            }}>
            <NavigationContainer
                ref={NavigationService.topLevelNavigatorRef}
                initialState={initialState}
                independent={true}
                onStateChange={onStateChange}
                theme={{
                    dark: false,
                    colors: {
                        // primary: "rgb(255, 45, 85)",
                        background: backgroundColor,
                        // card: "rgb(255, 255, 255)",
                        // text: "rgb(28, 28, 30)",
                        // border: "rgb(199, 199, 204)",
                    } as any,
                }}>
                <BasePageSafeAreaView>
                    <AppStackNavigatorContainer />
                </BasePageSafeAreaView>
            </NavigationContainer>
        </KeyboardAvoidingView>
    );
});
export default App;

const BasePageSafeAreaView = styled.SafeAreaView`
    flex: 1;
`;
