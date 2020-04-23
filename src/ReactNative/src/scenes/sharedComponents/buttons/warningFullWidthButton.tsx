import * as React from "react";
import styled from "styled-components";
import {STYLE} from "../../../config/styleDefaults";
import {
    FullWidthButtonText,
    FullWidthButtonTouchableHighlight,
} from "./brandFullWidthButton";

const WarningFullWidthButton: React.FC<{onPress: () => void; children: string}> = ({
    children,
    onPress,
}) => (
    <ButtonTouchableHighlight onPress={onPress}>
        <ButtonText>{children}</ButtonText>
    </ButtonTouchableHighlight>
);

export default WarningFullWidthButton;

const ButtonTouchableHighlight = styled(FullWidthButtonTouchableHighlight)`
    background-color: ${STYLE.COLORS.WARNING_YELLOW};
    border-color: ${STYLE.COLORS.WARNING_YELLOW};
`;
const ButtonText = styled(FullWidthButtonText)`
    color: ${STYLE.COLORS.GREY2};
    font-weight: bold;
`;
