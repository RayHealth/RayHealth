import React from "react";
import styled from "styled-components/native";
import {
    BottomTabDescriptorMap,
    BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {TabNavigationState, NavigationHelpers} from "@react-navigation/native";
import {BORDER_RADIUS} from "../../appStack/styles";

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
                        <TabBarIconText isFocused={isFocused}>{label}</TabBarIconText>
                    </TabBarIconTouchableOpacity>
                );
            })}
        </TabBarIconView>
    ),
);

const TabBarIconView = styled.View`
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: ${BORDER_RADIUS};
    background-color: #fff;
`;
const TabBarIconTouchableOpacity = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;
    background: ${(props: ITabBarIconTextProps) =>
        props.isFocused ? "transparent" : "transparent"};
`;
interface ITabBarIconTextProps {
    isFocused: boolean;
}
const TabBarIconText = styled.Text`
    color: ${({isFocused}: ITabBarIconTextProps) => (isFocused ? "#673ab7" : "#222")};
`;

export default AppTabBar;
