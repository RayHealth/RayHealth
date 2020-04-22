import React from "react";
import {useLinking} from "@react-navigation/native";
import NavigationService from "./navigationService";

type State = any;
type InitialState = [false, undefined] | [true, State | undefined];
// https://reactnavigation.org/docs/use-linking/
const useInitialState = (): InitialState => {
    const {getInitialState} = useLinking(NavigationService.topLevelNavigatorRef, {
        prefixes: ["https://www.ray.health", "https://ray.health", "health.ray"],
    });
    const [isReady, setIsReady] = React.useState(false);
    const [initialState, setInitialState] = React.useState<State | undefined>();
    React.useEffect(() => {
        (async () => {
            const state = await getInitialState().catch((err) =>
                console.error("initial state failed", err),
            );
            if (state !== undefined) {
                setInitialState(state);
            }
            setIsReady(true);
        })();
    }, [getInitialState]);
    if (!isReady) {
        return [false, undefined];
    }
    return [true, initialState];
};
export default useInitialState;
