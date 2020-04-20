import React from "react";
import styled from "styled-components";

const FullWidthButton: React.FC<{onPress: () => void; children: string}> = ({
    children,
    onPress,
}) => (
    <FullWidthButtonTouchableHighlight onPress={onPress}>
        <FullWidthButtonText>{children}</FullWidthButtonText>
    </FullWidthButtonTouchableHighlight>
);

export default FullWidthButton;

const FullWidthButtonTouchableHighlight = styled.TouchableHighlight`
    background-color: #222;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-top-width: 1px;
    border-top-color: red;
    border-bottom-width: 1px;
    border-bottom-color: red;
`;
const FullWidthButtonText = styled.Text`
    color: white;
`;
