import * as React from "react";
import styled from "styled-components";
import {STYLE} from "../../../config/styleDefaults";
import {
    FullWidthButtonText,
    FullWidthButtonTouchableHighlight,
} from "./brandFullWidthButton";

const ComplimentaryFullWidthButton: React.FC<{onPress: () => void; children: string}> = ({
    children,
    onPress,
}) => (
    <ButtonTouchableHighlight onPress={onPress}>
        <ButtonText>{children}</ButtonText>
    </ButtonTouchableHighlight>
);

export default ComplimentaryFullWidthButton;

const ButtonTouchableHighlight = styled(FullWidthButtonTouchableHighlight)`
    background-color: ${STYLE.COLORS.BRAND_COMPLIMENTARYe};
    border-color: ${STYLE.COLORS.BRAND_COMPLIMENTARY};
`;
const ButtonText = styled(FullWidthButtonText)`
    color: ${STYLE.COLORS.BRAND_COMPLIMENTARY3};
`;
