import React, {useEffect} from "react";
import {StatusBar, YellowBox} from "react-native";
import {Provider} from "react-redux";
import {NetworkProvider} from "react-native-offline";

import appRnStore from "./store/rnStore";
import RootStackComponent from "./scenes/router";

const App: React.FC = React.memo(() => {
    useEffect(() => {
        // SplashScreen.hide();
        YellowBox.ignoreWarnings([
            "Setting a timer",
            "Warning: `-[RCTRootView cancelTouches]`",
        ]);
    }, []);
    return (
        <Provider store={appRnStore}>
            <StatusBar barStyle="dark-content" />
            <NetworkProvider>
                <RootStackComponent />
            </NetworkProvider>
        </Provider>
    );
});

export default App;
