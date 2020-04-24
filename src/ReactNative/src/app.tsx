import React, {useEffect} from "react";
import {StatusBar, YellowBox} from "react-native";
import {Provider} from "react-redux";
import {NetworkProvider} from "react-native-offline";

import {store, persistor} from "./store/rnStore";
import RootStackComponent from "./scenes/router";
import {PersistGate} from "redux-persist/integration/react";

const App: React.FC = React.memo(() => {
    useEffect(() => {
        // SplashScreen.hide();
        YellowBox.ignoreWarnings([
            "Setting a timer",
            "Warning: `-[RCTRootView cancelTouches]`",
        ]);
    }, []);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar barStyle="dark-content" />
                <NetworkProvider>
                    <RootStackComponent />
                </NetworkProvider>
            </PersistGate>
        </Provider>
    );
});

export default App;
