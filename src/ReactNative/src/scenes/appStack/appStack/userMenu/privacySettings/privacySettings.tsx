import * as React from "react";
import {APP_STACK_ROUTES} from "../../../../router/constants";
import NavigationService from "../../../../../services/navigationService";
import {
    MenuItemLabelText,
    MenuItemHeaderText,
    MenuItemBodyText,
    MenuItemC2A,
    MenuItemTouchableHighlight,
} from "../styles";

interface ShareSettingsProps {}
const PrivacySettings: React.FC<ShareSettingsProps> = () => {
    const onPress = React.useCallback(() => {
        NavigationService.navigate(APP_STACK_ROUTES.USER.SET_SHARE_SETTINGS.path);
    }, []);
    return (
        <MenuItemTouchableHighlight onPress={onPress}>
            <>
                <MenuItemLabelText>Privacy settings</MenuItemLabelText>
                <MenuItemHeaderText>
                    Control what information you share with RayHealth and your regional
                    health authority.
                </MenuItemHeaderText>
                <MenuItemC2A>Click to change</MenuItemC2A>
            </>
        </MenuItemTouchableHighlight>
    );
};

export default PrivacySettings;
