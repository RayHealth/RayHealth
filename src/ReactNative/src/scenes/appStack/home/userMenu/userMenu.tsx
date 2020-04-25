import React, {useCallback} from "react";
import styled from "styled-components/native";
import {BORDER_RADIUS, PageContainerView} from "../../styles";
import NavigationService from "../../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../../router/constants";
import ShareSettings from "./shareSettings";
import {STYLE} from "../../../../config/styleDefaults";

// cannot be React.memo, react nav issue
const UserMenu: React.FC = () => {
    return (
        <PageContainerView>
            <MenuItem route={APP_STACK_ROUTES.USER.MENU.path}>
                Your personal details
            </MenuItem>
            <ShareSettings />
            <MenuItem route={APP_STACK_ROUTES.USER.PAST_ASSESSMENTS_LIST.path}>
                View past assessments
            </MenuItem>
            <MenuItem route={APP_STACK_ROUTES.USER.MENU.path}>View past trips</MenuItem>
            <MenuItem route={APP_STACK_ROUTES.USER.MENU.path}>COVID-19 Links</MenuItem>
            <MenuItem route={APP_STACK_ROUTES.USER.MENU.path}>
                Frequently asked questions
            </MenuItem>
            <MenuItem route={APP_STACK_ROUTES.USER.MENU.path}>
                Term and Conditions
            </MenuItem>
            <MenuItem route={APP_STACK_ROUTES.USER.MENU.path}>Privacy policy</MenuItem>
        </PageContainerView>
    );
};

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
const MenuItemTouchableHighlight = styled.TouchableHighlight`
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    background: ${STYLE.COLORS.GREYC};
    border-radius: ${BORDER_RADIUS};
`;
const MenuItemText = styled.Text`
    padding: 30px;
    color: ${STYLE.COLORS.GREY2};
`;
