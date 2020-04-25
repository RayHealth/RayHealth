import * as React from "react";
import styled from "styled-components/native";
import {APP_STACK_ROUTES} from "../../../router/constants";
import {useCallback} from "react";
import NavigationService from "../../../../services/navigationService";
import {DefaultText, STYLE} from "../../../../config/styleDefaults";
import {MenuItemTouchableHighlight} from "./userMenu";

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
                    You are sharing anonymized data with Alberta Health Services
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

const MenuItemLabelText = styled(DefaultText)`
    font-size: 12px;
    font-weight: bold;
    color: ${STYLE.COLORS.GREY2};
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
`;
const MenuItemHeaderText = styled(DefaultText)`
    color: ${STYLE.COLORS.BLACK};
    font-weight: bold;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
`;
const MenuItemBodyText = styled(DefaultText)`
    color: ${STYLE.COLORS.GREY1};
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
`;

const MenuItemC2A = styled(DefaultText)`
    color: ${STYLE.COLORS.GREY3};
    padding-right: 20px;
    padding-bottom: 10px;
    align-self: flex-end;
`;
