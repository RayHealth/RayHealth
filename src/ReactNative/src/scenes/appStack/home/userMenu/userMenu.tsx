import React, {useCallback} from "react";
import {PageContainerView} from "../../styles";
import NavigationService from "../../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../../router/constants";
import ShareSettings from "./shareSettings";
import {View} from "react-native";
import HealthAuthority from "./healthAuthority/healthAuthority";
import {
    MenuItemText,
    MenuItemTouchableHighlight,
    SecondaryMenuItemTouchableHighlight,
    SecondaryMenuItemText,
} from "./styles";

// cannot be React.memo, react nav issue
const UserMenu: React.FC = () => (
    <PageContainerView>
        <View style={{height: 30}} />
        <MenuItem route={APP_STACK_ROUTES.USER.MENU.path}>Your personal details</MenuItem>
        <HealthAuthority />
        <ShareSettings />
        <MenuItem route={APP_STACK_ROUTES.USER.PAST_ASSESSMENTS_LIST.path}>
            View past assessments
        </MenuItem>
        <MenuItem route={APP_STACK_ROUTES.USER.MENU.path}>
            View locally saved trips
        </MenuItem>

        <SecondaryMenuItem route={APP_STACK_ROUTES.USER.MENU.path}>
            COVID-19 resources
        </SecondaryMenuItem>
        <SecondaryMenuItem route={APP_STACK_ROUTES.USER.MENU.path}>
            Ray.Health frequently asked questions
        </SecondaryMenuItem>
        <SecondaryMenuItem route={APP_STACK_ROUTES.USER.MENU.path}>
            Term and Conditions
        </SecondaryMenuItem>
        <SecondaryMenuItem route={APP_STACK_ROUTES.USER.MENU.path}>
            Privacy policy
        </SecondaryMenuItem>
    </PageContainerView>
);

export default UserMenu;

interface MenuItemProps {
    route: string;
    children: string;
}
const MenuItem: React.FC<MenuItemProps> = React.memo(({children, route}) => {
    const onPress = useCallback(() => {
        NavigationService.navigate(route);
    }, [route]);
    return (
        <MenuItemTouchableHighlight onPress={onPress}>
            <MenuItemText>{children}</MenuItemText>
        </MenuItemTouchableHighlight>
    );
});

const SecondaryMenuItem: React.FC<MenuItemProps> = React.memo(({children, route}) => {
    const onPress = useCallback(() => {
        NavigationService.navigate(route);
    }, [route]);
    return (
        <SecondaryMenuItemTouchableHighlight onPress={onPress}>
            <SecondaryMenuItemText>{children}</SecondaryMenuItemText>
        </SecondaryMenuItemTouchableHighlight>
    );
});
