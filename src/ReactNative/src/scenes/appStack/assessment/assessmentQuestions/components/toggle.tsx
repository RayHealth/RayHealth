import * as React from "react";
import {useCallback} from "react";
import {STYLE} from "../../../../../config/styleDefaults";
import styled from "styled-components";

interface ToggleProps {
    children: string;
    toggleFunc: (v: boolean) => void;
    value: boolean;
}

const Toggle: React.FC<ToggleProps> = ({children, toggleFunc, value}) => {
    const onClick = useCallback(() => {
        toggleFunc(!value);
    }, [toggleFunc, value]);
    return value ? (
        <ToggleOffTouchableHighlight onPress={onClick}>
            <ToggleOffText>{children}</ToggleOffText>
        </ToggleOffTouchableHighlight>
    ) : (
        <ToggleOnTouchableHighlight onPress={onClick}>
            <ToggleOnText>{children}</ToggleOnText>
        </ToggleOnTouchableHighlight>
    );
};

export default Toggle;

const ToggleOffTouchableHighlight = styled.TouchableHighlight`
    background-color: ${STYLE.COLORS.BRAND_COMPLIMENTARYe};
    border-width: 1px;
    border-color: ${STYLE.COLORS.BRAND_COMPLIMENTARY};
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    align-items: flex-start;
`;
const ToggleOffText = styled.Text`
    font-size: ${STYLE.FONT_SIZES.BUTTON_TEXT}px;
    color: ${STYLE.COLORS.BRAND_COMPLIMENTARY3};
`;

const ToggleOnTouchableHighlight = styled(ToggleOffTouchableHighlight)`
    background-color: ${STYLE.COLORS.GREYE};
    border-color: ${STYLE.COLORS.GREY9};
`;
const ToggleOnText = styled(ToggleOffText)`
    color: ${STYLE.COLORS.GREY2};
`;
