import React from "react";
import styled from "styled-components/native";
import {
    BottomTabDescriptorMap,
    BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {TabNavigationState, NavigationHelpers} from "@react-navigation/native";
import {getRouteOptionsFromPath} from "../constants";
import {ImageSourcePropType} from "react-native";
import {DefaultText, STYLE} from "../../../config/styleDefaults";

interface IAppTabBarProps {
    state: TabNavigationState;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<
        Record<string, object | undefined>,
        BottomTabNavigationEventMap
    >;
}
const AppTabBar: React.FC<IAppTabBarProps> = React.memo(
    ({state, descriptors, navigation}) => (
        <TabBarIconView>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const icon = isFocused
                    ? getRouteOptionsFromPath(route.name).iconIsFocused
                    : getRouteOptionsFromPath(route.name).icon;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };
                return (
                    <TabBarIconTouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ["selected"] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}>
                        {icon ? (
                            <TabBarIcon icon={icon} />
                        ) : (
                            <TabBarIconText isFocused={isFocused}>{label}</TabBarIconText>
                        )}
                    </TabBarIconTouchableOpacity>
                );
            })}
        </TabBarIconView>
    ),
);

const TabBarIconView = styled.View`
    flex-direction: row;
    background-color: ${STYLE.SETTINGS.BACKGROUND_FOOTER_COLOR};
`;
const TabBarIconTouchableOpacity = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 5px;
    border-top-width: 3px;
    border-top-color: ${(props: ITabBarIconTextProps) =>
        props.isFocused ? STYLE.COLORS.BRAND : "transparent"}
    background: ${(props: ITabBarIconTextProps) =>
        props.isFocused ? "transparent" : "transparent"};
`;
interface ITabBarIconTextProps {
    isFocused: boolean;
}
interface TabBarIconIconProps {
    icon: ImageSourcePropType;
}
const TabBarIcon: React.FC<TabBarIconIconProps> = ({icon}) => (
    <TabBarIconImage source={icon} />
);
const TabBarIconImage = styled.Image`
    height: 35px;
    width: 35px;
`;

const TabBarIconText = styled(DefaultText)`
    color: ${({isFocused}: ITabBarIconTextProps) =>
        isFocused ? STYLE.COLORS.BRAND : STYLE.COLORS.GREY5};
`;

export default AppTabBar;
