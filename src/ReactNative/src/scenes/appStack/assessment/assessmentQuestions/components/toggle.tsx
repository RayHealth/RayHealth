import * as React from "react";
import LightFullWidthButton from "../../../../sharedComponents/buttons/lightFullWidthButton";
import {useCallback} from "react";
import ComplimentaryFullWidthButton from "../../../../sharedComponents/buttons/complimenaryFullWidthButton";

interface ToggleProps {
    children: string;
    toggleFunc: (v: boolean) => void;
    value: boolean;
}

const Toggle: React.FC<ToggleProps> = ({children, toggleFunc, value}) => {
    const onClick = useCallback(() => {
        toggleFunc(!value);
    }, [toggleFunc, value]);
    return value ? (
        <ComplimentaryFullWidthButton onPress={onClick}>{children}</BrandFullWidthButton>
    ) : (
        <LightFullWidthButton onPress={onClick}>{children}</LightFullWidthButton>
    );
};

export default Toggle;
