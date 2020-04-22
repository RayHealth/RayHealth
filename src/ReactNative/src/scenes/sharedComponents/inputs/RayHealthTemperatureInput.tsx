import React from "react";
import styled from "styled-components/native";
import {STYLE} from "../../../config/styleDefaults";

interface RayHealthTextInputProps {
    value: string;
    onChange: (newText: string) => void;
}

const RayHealthTemperatureInput: React.FC<RayHealthTextInputProps> = ({
    value,
    onChange,
}) => {
    const oc = (text) => {
        onChange(text);
    };
    return <StyledTextInput onChangeText={oc} value={value} />;
};

export default RayHealthTemperatureInput;

const StyledTextInput = styled.TextInput`
    border-width: 1px;
    border-color: #222;
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #111;
    font-size: ${STYLE.FONT_SIZES.INPUT}px;
`;
