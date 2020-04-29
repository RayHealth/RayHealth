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
import {useSelector} from "react-redux";
import {
    getCurrentUsersPermissionToShareAggregateData,
    getCurrentUsersPermissionToSharePersonalData,
} from "@reduxShared/models/currentUser/selectors";

interface ShareSettingsProps {}
const ShareSettings: React.FC<ShareSettingsProps> = () => {
    const permissionToSharePersonalData = useSelector(
        getCurrentUsersPermissionToSharePersonalData,
    );
    const permissionToShareAggregateData = useSelector(
        getCurrentUsersPermissionToShareAggregateData,
    );
    const onPress = React.useCallback(() => {
        NavigationService.navigate(APP_STACK_ROUTES.USER.SET_SHARE_SETTINGS.path);
    }, []);
    return (
        <MenuItemTouchableHighlight onPress={onPress}>
            <>
                <MenuItemLabelText>Privacy settings</MenuItemLabelText>
                <MenuItemHeaderText>
                    You control what information you share with RayHealth and your
                    regional health authority
                </MenuItemHeaderText>
                <MenuItemBodyText>
                    You {permissionToSharePersonalData ? "ARE" : "ARE NOT"} currently
                    sharing personal data.
                </MenuItemBodyText>
                <MenuItemBodyText>
                    You {permissionToShareAggregateData ? "ARE" : "ARE NOT"} currently
                    sharing aggragate data.
                </MenuItemBodyText>
                <MenuItemC2A>Click to change</MenuItemC2A>
            </>
        </MenuItemTouchableHighlight>
    );
};

export default ShareSettings;
