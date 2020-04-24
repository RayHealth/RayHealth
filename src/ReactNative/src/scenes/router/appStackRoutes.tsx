import React, {useEffect} from "react";
import {APP_STACK_ROUTES} from "./constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeIndex from "../appStack/home/homeScreen";
import AppTabBar from "./tabBarComponents";
import {createStackNavigator} from "@react-navigation/stack";
import UserMenu from "../appStack/home/userMenu/userMenu";
import Assessment from "../appStack/assessment/assessment";
import {useSelector} from "react-redux";
import {getCurrentAssessmentUuid} from "@reduxShared/models/assessments/accessors";
import NavigationService from "../../services/navigationService";
import PastAssessments from "../appStack/home/userMenu/pastAssessments";

const PrimaryStack = createStackNavigator();
const AppStackNavigator = () => {
    useAssessmentMonitor();
    return (
        <PrimaryStack.Navigator>
            <PrimaryStack.Screen
                name={APP_STACK_ROUTES.HOME.INDEX.path}
                component={StackWithBottomTabs}
                options={{headerShown: false}}
            />
            <PrimaryStack.Screen
                name={APP_STACK_ROUTES.ASSESSMENTS.NEW.path}
                component={Assessment}
                options={{headerShown: false, gestureEnabled: false}}
            />
        </PrimaryStack.Navigator>
    );
};

export default AppStackNavigator;

const BottomTab = createBottomTabNavigator();
const StackWithBottomTabs: React.FC = () => (
    <BottomTab.Navigator tabBar={(props) => <AppTabBar {...props} />}>
        <BottomTab.Screen
            name={APP_STACK_ROUTES.HOME.INDEX.path}
            component={HomeIndex}
            options={{
                tabBarLabel: APP_STACK_ROUTES.HOME.INDEX.label,
                tabBarAccessibilityLabel: APP_STACK_ROUTES.HOME.INDEX.label,
            }}
        />
        <BottomTab.Screen
            name={APP_STACK_ROUTES.USER.MENU.path}
            component={UserMenuStackNavigator}
            options={{
                tabBarLabel: APP_STACK_ROUTES.USER.MENU.label,
                tabBarAccessibilityLabel: APP_STACK_ROUTES.USER.MENU.label,
            }}
        />
    </BottomTab.Navigator>
);

const UserMenuStack = createStackNavigator();
const UserMenuStackNavigator = () => {
    useAssessmentMonitor();
    return (
        <UserMenuStack.Navigator>
            <UserMenuStack.Screen
                name={APP_STACK_ROUTES.USER.MENU.path}
                component={UserMenu}
                options={{title: APP_STACK_ROUTES.USER.MENU.label, headerShown: false}}
            />
            <UserMenuStack.Screen
                name={APP_STACK_ROUTES.USER.PAST_ASSESSMENTS_LIST.path}
                component={PastAssessments}
                options={{title: APP_STACK_ROUTES.USER.PAST_ASSESSMENTS_LIST.label}}
            />
        </UserMenuStack.Navigator>
    );
};

const useAssessmentMonitor = (): void => {
    const assessmentUuid = useSelector(getCurrentAssessmentUuid);
    useEffect(() => {
        if (assessmentUuid) {
            NavigationService.navigate(APP_STACK_ROUTES.ASSESSMENTS.NEW.path);
        }
    });
};
