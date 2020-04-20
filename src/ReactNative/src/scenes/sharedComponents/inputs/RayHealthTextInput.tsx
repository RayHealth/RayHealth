import React from "react";
import styled from "styled-components/native";

interface RayHealthTextInputProps {
    value: string;
    onChange: (newText: string) => void;
}

const RayHealthTextInput: React.FC<RayHealthTextInputProps> = ({value, onChange}) => {
    const oc = (text) => {
        console.log(text);
        onChange(text);
    };
    return <StyledTextInput onChangeText={oc} value={value} />;
};

export default RayHealthTextInput;

const StyledTextInput = styled.TextInput`
    border-width: 1px;
    border-color: #222;
    padding: 10px;
    border-radius: 3px;
    color: #111;
`;
