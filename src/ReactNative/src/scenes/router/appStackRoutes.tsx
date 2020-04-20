import React from "react";
import {APP_STACK_ROUTES} from "./constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeIndex from "../appStack/home";
import AppTabBar from "./tabBarComponents";
import {createStackNavigator} from "@react-navigation/stack";
import Assessment1 from "../appStack/assessment/Assessment1";
import Assessment2 from "../appStack/assessment/Assessment2";
import Placeholder from "../appStack/home/placeholder";

const BottomTab = createBottomTabNavigator();
const HomeStackNavigator: React.FC = () => (
    <BottomTab.Navigator tabBar={(props) => <AppTabBar {...props} />}>
        <BottomTab.Screen
            name={APP_STACK_ROUTES.HOME.INDEX}
            component={HomeIndex}
            options={{
                tabBarLabel: "Home",
                tabBarAccessibilityLabel: "Home screen",
            }}
        />
        <BottomTab.Screen
            name={APP_STACK_ROUTES.HOME.PLACEHOLDER}
            component={Placeholder}
            options={({route}) => {
                console.log(route);
                return {
                    tabBarLabel: "Placeholder",
                    tabBarAccessibilityLabel: "Placeholder",
                };
            }}
        />
    </BottomTab.Navigator>
);

const Stack = createStackNavigator();
const AppStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={APP_STACK_ROUTES.HOME.INDEX} component={HomeStackNavigator} />
        <Stack.Screen
            name={APP_STACK_ROUTES.ASSESSMENTS.STEP_1}
            component={Assessment1}
        />
        <Stack.Screen
            name={APP_STACK_ROUTES.ASSESSMENTS.STEP_2}
            component={Assessment2}
        />
    </Stack.Navigator>
);

export default AppStackNavigator;
