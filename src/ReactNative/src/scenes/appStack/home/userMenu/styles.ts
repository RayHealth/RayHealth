import styled from "styled-components/native";
import {DefaultText, STYLE} from "../../../../config/styleDefaults";

export const MenuItemTouchableHighlight = styled.TouchableHighlight`
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    background: ${STYLE.COLORS.WHITE};
    border-radius: ${STYLE.BORDER_RADIUS}px;
`;
export const MenuItemText = styled(DefaultText)`
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    color: ${STYLE.COLORS.GREY2};
`;
export const SecondaryMenuItemTouchableHighlight = styled.TouchableHighlight`
    background: ${STYLE.COLORS.BRAND6};
    border-top-width: 1px;
    border-top-color: ${STYLE.COLORS.BRANDa};
`;
export const SecondaryMenuItemText = styled(DefaultText)`
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    color: ${STYLE.COLORS.WHITE};
`;
export const MenuItemLabelText = styled(DefaultText)`
    font-size: 12px;
    font-weight: bold;
    color: ${STYLE.COLORS.GREY2};
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
`;
export const MenuItemHeaderText = styled(DefaultText)`
    color: ${STYLE.COLORS.BLACK};
    font-weight: bold;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
`;
export const MenuItemBodyText = styled(DefaultText)`
    color: ${STYLE.COLORS.GREY1};
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
`;

export const MenuItemC2A = styled(DefaultText)`
    color: ${STYLE.COLORS.GREY3};
    padding-right: 20px;
    padding-bottom: 10px;
    align-self: flex-end;
`;
