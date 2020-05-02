import * as React from "react";
import {DefaultView} from "../../../../config/styleDefaults";
import {BrandFullWidthButton} from "../../buttons";
import {
    useDetectAutoCompleteMultiSelectorChange,
    useOpenAutocompleteMultiSelectorModal,
} from "./routeHooks";
import {AMSValue} from "./constants";

interface AutocompleteMultiSelectorInputProps {
    keyToMonitor: string;
    label: string;
    staticData: AMSValue[];
    currentValue?: AMSValue[];
    onChange: (newValues: AMSValue[]) => void;
}
const AutocompleteMultiSelectorButton: React.FC<AutocompleteMultiSelectorInputProps> = React.memo(
    ({keyToMonitor, currentValue, label, staticData, onChange}) => {
        const onOpen = useOpenAutocompleteMultiSelectorModal(
            keyToMonitor,
            label,
            staticData,
            currentValue,
        );
        useDetectAutoCompleteMultiSelectorChange(keyToMonitor, onChange, currentValue);
        const buttonLabel = currentValue
            ? currentValue.map((v) => v.label).join(",")
            : label;
        return (
            <DefaultView>
                <BrandFullWidthButton onPress={onOpen}>
                    {buttonLabel}
                </BrandFullWidthButton>
            </DefaultView>
        );
    },
);

export default AutocompleteMultiSelectorButton;
