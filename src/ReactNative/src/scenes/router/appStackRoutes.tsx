import React, {useEffect} from "react";
import {APP_STACK_ROUTES} from "./constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeIndex from "../appStack/home";
import AppTabBar from "./tabBarComponents";
import {createStackNavigator} from "@react-navigation/stack";
import Placeholder from "../appStack/home/placeholder";
import Assessment from "../appStack/assessment/Assessment";
import {useSelector} from "react-redux";
import {getCurrentAssessmentUuid} from "@reduxShared/models/assessments/accessors";
import NavigationService from "../../services/navigationService";

const Stack = createStackNavigator();
const AppStackNavigator = () => {
    useAssessmentMonitor();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={APP_STACK_ROUTES.HOME.INDEX}
                component={StackWithBottomTabs}
            />
            <Stack.Screen
                name={APP_STACK_ROUTES.ASSESSMENTS.NEW}
                component={Assessment}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;

const BottomTab = createBottomTabNavigator();
const StackWithBottomTabs: React.FC = () => (
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
            options={{
                tabBarLabel: "Placeholder",
                tabBarAccessibilityLabel: "Placeholder",
            }}
        />
    </BottomTab.Navigator>
);

const useAssessmentMonitor = (): void => {
    const assessmentUuid = useSelector(getCurrentAssessmentUuid);
    useEffect(() => {
        if (assessmentUuid) {
            NavigationService.navigate(APP_STACK_ROUTES.ASSESSMENTS.NEW);
        }
    }, [assessmentUuid]);
};
