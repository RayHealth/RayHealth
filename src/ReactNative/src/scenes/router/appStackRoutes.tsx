import React, {useEffect} from "react";
import {APP_STACK_ROUTES, getRouteOptionsFromPath, RoutePath} from "./constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeIndex from "../appStack/appStack/homeScreen";
import AppTabBar from "./tabBarComponents";
import {createStackNavigator, StackNavigationOptions} from "@react-navigation/stack";
import UserMenu from "../appStack/appStack/userMenu/userMenu";
import Assessment from "../appStack/assessmentStack/assessment";
import {useSelector} from "react-redux";
import {getCurrentAssessmentUuid} from "@reduxShared/models/assessments/selectors";
import NavigationService from "../../services/navigationService";
import PastAssessments from "../appStack/appStack/userMenu/pastAssessments";
import SetHealthAuthority from "../appStack/appStack/userMenu/healthAuthority/setHealthAuthority";
import ManagePrivacySettings from "../appStack/appStack/userMenu/privacySettings/managePrivacySettings";
import ManagePersonalInformation from "../appStack/appStack/userMenu/personallyIdentifiableInformation/managePersonalInformation";
import AutocompleteMultiSelectorModal, {
    OverrideBackButton,
} from "../sharedComponents/inputs/autocompleteMultiSelector/autocompleteMultiSelectorModal";
import {StackHeaderLeftButtonProps} from "@react-navigation/stack/lib/typescript/src/types";

const PrimaryStack = createStackNavigator();
const AppStackNavigator = () => {
    useAssessmentMonitor();
    return (
        <PrimaryStack.Navigator mode="modal">
            <PrimaryStack.Screen
                name={APP_STACK_ROUTES.HOME.INDEX.path}
                component={StackWithBottomTabs}
                options={{headerShown: false}}
            />
            <PrimaryStack.Screen
                name={APP_STACK_ROUTES.MODALS.ASSESSMENTS.NEW.path}
                component={Assessment}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />
            <PrimaryStack.Screen
                name={APP_STACK_ROUTES.MODALS.FORM.AUTOCOMPLETE_MULTI_SELECT.path}
                component={AutocompleteMultiSelectorModal}
                options={{
                    headerShown: true,
                    headerLeft: (props: StackHeaderLeftButtonProps) => {
                        console.log(props);
                        return <OverrideBackButton />;
                    },
                    gestureEnabled: false,
                }}
            />
        </PrimaryStack.Navigator>
    );
};

export default AppStackNavigator;

const isTabBarVisibleOnCurrentNestedScreen = (route: any): false | undefined => {
    const state = route.route.state;
    const routes = state?.routes;
    const currentRouteName = routes ? routes[state.index]?.name : route.route.name;
    return getRouteOptionsFromPath(currentRouteName).tabBarVisible;
};

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
            options={(route) => ({
                tabBarLabel: APP_STACK_ROUTES.USER.MENU.label,
                tabBarAccessibilityLabel: APP_STACK_ROUTES.USER.MENU.label,
                tabBarVisible: isTabBarVisibleOnCurrentNestedScreen(route),
            })}
        />
    </BottomTab.Navigator>
);

const UserMenuStack = createStackNavigator();
const setOptionsFromRoute = (routePath: RoutePath): StackNavigationOptions => ({
    headerStyle: {
        backgroundColor: routePath.style?.headerBg,
    },
    headerTintColor: routePath.style?.headerColor,
    title: routePath.label,
});
const UserMenuStackNavigator = () => {
    useAssessmentMonitor();
    return (
        <UserMenuStack.Navigator>
            <UserMenuStack.Screen
                name={APP_STACK_ROUTES.USER.MENU.path}
                component={UserMenu}
                options={{
                    title: APP_STACK_ROUTES.USER.MENU.label,
                    headerShown: false,
                }}
            />
            <UserMenuStack.Screen
                name={APP_STACK_ROUTES.USER.PERSONAL_INFORMATION.path}
                component={ManagePersonalInformation}
                options={setOptionsFromRoute(APP_STACK_ROUTES.USER.PERSONAL_INFORMATION)}
            />
            <UserMenuStack.Screen
                name={APP_STACK_ROUTES.USER.SET_SHARE_SETTINGS.path}
                component={ManagePrivacySettings}
                options={setOptionsFromRoute(APP_STACK_ROUTES.USER.SET_SHARE_SETTINGS)}
            />
            <UserMenuStack.Screen
                name={APP_STACK_ROUTES.USER.SET_HEALTH_AUTHORITY.path}
                component={SetHealthAuthority}
                options={setOptionsFromRoute(APP_STACK_ROUTES.USER.SET_HEALTH_AUTHORITY)}
            />
            <UserMenuStack.Screen
                name={APP_STACK_ROUTES.USER.PAST_ASSESSMENTS_LIST.path}
                component={PastAssessments}
                options={setOptionsFromRoute(APP_STACK_ROUTES.USER.PAST_ASSESSMENTS_LIST)}
            />
        </UserMenuStack.Navigator>
    );
};

const useAssessmentMonitor = (): void => {
    const assessmentUuid = useSelector(getCurrentAssessmentUuid);
    useEffect(() => {
        if (assessmentUuid) {
            NavigationService.navigate(APP_STACK_ROUTES.MODALS.ASSESSMENTS.NEW.path);
        }
    });
};
