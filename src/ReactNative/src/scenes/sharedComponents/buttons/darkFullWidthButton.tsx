import * as React from "react";
import styled from "styled-components";
import {STYLE} from "../../../config/styleDefaults";
import {
    FullWidthButtonText,
    FullWidthButtonTouchableHighlight,
} from "./brandFullWidthButton";

const DarkFullWidthButton: React.FC<{onPress: () => void; children: string}> = ({
    children,
    onPress,
}) => (
    <ButtonTouchableHighlight onPress={onPress}>
        <ButtonText>{children}</ButtonText>
    </ButtonTouchableHighlight>
);

export default DarkFullWidthButton;

const ButtonTouchableHighlight = styled(FullWidthButtonTouchableHighlight)`
    background-color: ${STYLE.COLORS.BRANDi};
    border-color: ${STYLE.COLORS.BRANDc};
`;
const ButtonText = styled(FullWidthButtonText)`
    color: ${STYLE.COLORS.BRANDc};
`;
