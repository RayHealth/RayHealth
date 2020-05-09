import * as React from "react";
import {DefaultView} from "../../../../config/styleDefaults";
import {SecondaryFullWidthButton} from "../../buttons";
import {
    useDetectAutoCompleteMultiSelectorChange,
    useOpenAutocompleteMultiSelectorModal,
} from "./routeHooks";
import {AMSPayload} from "./utils";
import {mdiMenuDownBrand, mdiMenuDownDisabled} from "../../../../services/staticImages";

interface AutocompleteMultiSelectorInputProps {
    keyToMonitor: string;
    label: string;
    staticData: AMSPayload[];
    currentValue?: AMSPayload[];
    onChange: (newValues: AMSPayload[]) => void;
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
                <SecondaryFullWidthButton
                    onPress={onOpen}
                    rightIcon={mdiMenuDownBrand}
                    rightIconDisabled={mdiMenuDownDisabled}>
                    {buttonLabel}
                </SecondaryFullWidthButton>
            </DefaultView>
        );
    },
);

export default AutocompleteMultiSelectorButton;
