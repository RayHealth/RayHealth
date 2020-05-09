import * as React from "react";
import {APP_STACK_ROUTES} from "../../../../router/constants";
import {useCallback} from "react";
import NavigationService from "../../../../../services/navigationService";
import {MenuItemText, MenuItemTouchableHighlight} from "../styles";

interface PIIButtonProps {}
const PIIButton: React.FC<PIIButtonProps> = () => {
    const onPress = useCallback(() => {
        NavigationService.navigate(APP_STACK_ROUTES.USER.PERSONAL_INFORMATION.path);
    }, []);
    return (
        <MenuItemTouchableHighlight onPress={onPress}>
            <MenuItemText>Personal Information Button</MenuItemText>
        </MenuItemTouchableHighlight>
    );
};

export default PIIButton;
