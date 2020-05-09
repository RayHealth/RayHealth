import React from "react";
import styled from "styled-components/native";
import {STYLE} from "../../../config/styleDefaults";

interface RayHealthTextInputProps {
    autoFocus?: boolean;
    value: string;
    onChange: (newText: string) => void;
    placeholder?: string;
}

const RayHealthTextInput: React.FC<RayHealthTextInputProps> = ({
    autoFocus,
    value,
    onChange,
    placeholder,
}) => {
    const oc = (text) => onChange(text);
    return (
        <StyledTextInput
            autoFocus={autoFocus}
            onChangeText={oc}
            value={value}
            placeholder={placeholder}
        />
    );
};

export default RayHealthTextInput;

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
    background: ${STYLE.COLORS.WHITE};
`;
