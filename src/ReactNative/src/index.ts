import "react-native-gesture-handler";
import {AppRegistry} from "react-native";
import App from "./app";
import {enableScreens} from "react-native-screens";
// @ts-ignore-next-line
import {name as appName} from "../app.json";

enableScreens();

AppRegistry.registerComponent(appName, () => App);
