import * as React from "react";
import {useCallback} from "react";
import NavigationService from "../../../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../../../router/constants";
import {
    MenuItemC2A,
    MenuItemHeaderText,
    MenuItemLabelText,
    MenuItemTouchableHighlight,
} from "../styles";

interface HealthAuthorityProps {}
const HealthAuthority: React.FC<HealthAuthorityProps> = () => {
    const onPress = useCallback(() => {
        NavigationService.navigate(APP_STACK_ROUTES.USER.SET_HEALTH_AUTHORITY.path);
    }, []);
    return (
        <MenuItemTouchableHighlight onPress={onPress}>
            <>
                <MenuItemLabelText>Your regional health authority</MenuItemLabelText>
                <MenuItemHeaderText>
                    Alberta Health Services, Alberta, Canada
                </MenuItemHeaderText>
                <MenuItemC2A>Click to change</MenuItemC2A>
            </>
        </MenuItemTouchableHighlight>
    );
};

export default HealthAuthority;
