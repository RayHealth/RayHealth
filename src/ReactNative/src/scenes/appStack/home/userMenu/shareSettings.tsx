import * as React from "react";
import styled from "styled-components/native";
import {APP_STACK_ROUTES} from "../../../router/constants";
import {useCallback} from "react";
import NavigationService from "../../../../services/navigationService";
import {STYLE} from "../../../../config/styleDefaults";
import {BORDER_RADIUS} from "../../styles";

interface ShareSettingsProps {}
const ShareSettings: React.FC<ShareSettingsProps> = () => {
    const onPress = useCallback(() => {
        NavigationService.navigate(APP_STACK_ROUTES.USER.MENU.path);
    }, []);
    return (
        <MenuItemTouchableHighlight onPress={onPress}>
            <MenuItemText>Your share settings</MenuItemText>
        </MenuItemTouchableHighlight>
    );
};

export default ShareSettings;

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
