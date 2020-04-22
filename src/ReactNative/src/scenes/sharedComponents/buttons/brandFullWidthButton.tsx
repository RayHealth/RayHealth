import * as React from "react";
import styled from "styled-components";
import {STYLE} from "../../../config/styleDefaults";

const BrandFullWidthButton: React.FC<{onPress: () => void; children: string}> = ({
    children,
    onPress,
}) => (
    <FullWidthButtonTouchableHighlight onPress={onPress}>
        <FullWidthButtonText>{children}</FullWidthButtonText>
    </FullWidthButtonTouchableHighlight>
);

export default BrandFullWidthButton;

export const FullWidthButtonTouchableHighlight = styled.TouchableHighlight`
    background-color: ${STYLE.COLORS.BRAND};
    border-width: 1;
    border-color: ${STYLE.COLORS.BRAND};
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    align-items: center;
`;
export const FullWidthButtonText = styled.Text`
    font-size: ${STYLE.FONT_SIZES.BUTTON_TEXT}px;
    color: ${STYLE.COLORS.BRANDh};
`;
