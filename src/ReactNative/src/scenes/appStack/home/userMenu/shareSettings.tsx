import * as React from "react";
import {APP_STACK_ROUTES} from "../../../router/constants";
import {useCallback} from "react";
import NavigationService from "../../../../services/navigationService";
import {
    MenuItemLabelText,
    MenuItemHeaderText,
    MenuItemBodyText,
    MenuItemC2A,
    MenuItemTouchableHighlight,
} from "./styles";

interface ShareSettingsProps {}
const ShareSettings: React.FC<ShareSettingsProps> = () => {
    const onPress = useCallback(() => {
        NavigationService.navigate(APP_STACK_ROUTES.USER.MENU.path);
    }, []);
    return (
        <MenuItemTouchableHighlight onPress={onPress}>
            <>
                <MenuItemLabelText>Privacy settings</MenuItemLabelText>
                <MenuItemHeaderText>
                    You are sharing anonymized data with Ray.Health and your regional
                    health authority
                </MenuItemHeaderText>
                <MenuItemBodyText>
                    Information you share is anonymized to ensure your privacy is
                    protected. The information provided will allow your regional health
                    authority and Ray.Health to track the spread of COVID-19 and provide
                    early warning of exposure, or possible exposure to you and your fellow
                    citizens.
                </MenuItemBodyText>
                <MenuItemC2A>Click to change</MenuItemC2A>
            </>
        </MenuItemTouchableHighlight>
    );
};

export default ShareSettings;
