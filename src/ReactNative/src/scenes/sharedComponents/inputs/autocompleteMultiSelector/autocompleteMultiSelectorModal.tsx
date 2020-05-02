import * as React from "react";
import {DefaultText, DefaultView} from "../../../../config/styleDefaults";
import {BrandFullWidthButton} from "../../buttons";
import {useCloseAutocompleteMultiSelectorModal} from "./routeHooks";

interface AutocompleteMultiSelectorModalProps {}
const AutocompleteMultiSelectorModal: React.FC<AutocompleteMultiSelectorModalProps> = () => {
    const onClose = useCloseAutocompleteMultiSelectorModal();
    return (
        <DefaultView>
            <DefaultText>AutocompleteMultiSelectorModal</DefaultText>

            <BrandFullWidthButton onPress={onClose}>Close</BrandFullWidthButton>
        </DefaultView>
    );
};

export default AutocompleteMultiSelectorModal;
