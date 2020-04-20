import React from "react";
import {APP_STACK_ROUTES} from "./constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeIndex from "../appStack/home";
import AppTabBar from "./tabBarComponents";
import AssessmentNew from "../appStack/assessment/new";

const BottomTab = createBottomTabNavigator();
const AppStackNavigator: React.FC = () => (
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
            name={APP_STACK_ROUTES.ASSESSMENTS.NEW}
            component={AssessmentNew}
            options={{
                tabBarLabel: "Record New Assessment",
                tabBarAccessibilityLabel: "Record New Assessment",
            }}
        />
    </BottomTab.Navigator>
);

export default AppStackNavigator;
