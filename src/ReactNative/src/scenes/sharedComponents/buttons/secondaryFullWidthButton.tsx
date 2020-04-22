import * as React from "react";
import styled from "styled-components";
import {STYLE} from "../../../config/styleDefaults";
import {
    FullWidthButtonText,
    FullWidthButtonTouchableHighlight,
} from "./brandFullWidthButton";

const SecondaryFullWidthButton: React.FC<{onPress: () => void; children: string}> = ({
    children,
    onPress,
}) => (
    <ButtonTouchableHighlight onPress={onPress}>
        <ButtonText>{children}</ButtonText>
    </ButtonTouchableHighlight>
);

export default SecondaryFullWidthButton;

const ButtonTouchableHighlight = styled(FullWidthButtonTouchableHighlight)`
    background-color: ${STYLE.COLORS.BRANDi};
    border-color: ${STYLE.COLORS.BRAND};
`;
const ButtonText = styled(FullWidthButtonText)`
    color: ${STYLE.COLORS.BRAND};
`;
