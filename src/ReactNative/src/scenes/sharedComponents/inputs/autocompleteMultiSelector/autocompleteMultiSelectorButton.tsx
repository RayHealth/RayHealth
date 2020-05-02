import * as React from "react";
import {DefaultView} from "../../../../config/styleDefaults";
import {BrandFullWidthButton} from "../../buttons";
import {useOpenAutocompleteMultiSelectorModal} from "./routeHooks";
import {AMSValue} from "./constants";

interface AutocompleteMultiSelectorInputProps {
    label: string;
    staticData: AMSValue[];
    currentValue?: AMSValue[];
    onChange: (newValues: AMSValue[]) => void;
}
const AutocompleteMultiSelectorButton: React.FC<AutocompleteMultiSelectorInputProps> = () => {
    const onOpen = useOpenAutocompleteMultiSelectorModal();
    return (
        <DefaultView>
            <BrandFullWidthButton onPress={onOpen}>Open</BrandFullWidthButton>
        </DefaultView>
    );
};

export default AutocompleteMultiSelectorButton;
