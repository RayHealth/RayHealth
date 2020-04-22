import * as React from "react";
import styled from "styled-components";
import {STYLE} from "../../../config/styleDefaults";
import {
    FullWidthButtonText,
    FullWidthButtonTouchableHighlight,
} from "./brandFullWidthButton";

const LightFullWidthButton: React.FC<{onPress: () => void; children: string}> = ({
    children,
    onPress,
}) => (
    <ButtonTouchableHighlight onPress={onPress}>
        <ButtonText>{children}</ButtonText>
    </ButtonTouchableHighlight>
);

export default LightFullWidthButton;

const ButtonTouchableHighlight = styled(FullWidthButtonTouchableHighlight)`
    background-color: ${STYLE.COLORS.GREYE};
    border-color: ${STYLE.COLORS.GREY9};
`;
const ButtonText = styled(FullWidthButtonText)`
    color: ${STYLE.COLORS.GREY2};
`;
