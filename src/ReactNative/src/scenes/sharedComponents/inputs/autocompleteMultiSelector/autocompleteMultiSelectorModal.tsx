import * as React from "react";
import {DefaultText, DefaultView} from "../../../../config/styleDefaults";
import {BrandFullWidthButton} from "../../buttons";
import {useCloseAutocompleteMultiSelectorModal} from "./routeHooks";
import {AMSValue} from "./constants";
import {useRoute} from "@react-navigation/native";
import {PageContainerScrollView} from "../../../appStack/styles";

export interface AutocompleteMultiSelectorModalParams {
    backRoute: string;
    label: string;
    staticData: AMSValue[];
    currentValue?: AMSValue[];
}

const AutocompleteMultiSelectorModal: React.FC = React.memo(() => {
    const onClose = useCloseAutocompleteMultiSelectorModal();
    const route = (useRoute() as unknown) as {
        params: AutocompleteMultiSelectorModalParams;
    };
    const {label, staticData, currentValue} = route.params;
    return (
        <PageContainerScrollView>
            <DefaultView>
                <DefaultText>
                    {label} :{" "}
                    {currentValue
                        ? currentValue.map((v) => v.label).join(",")
                        : "none selected"}
                </DefaultText>
                {staticData.map((option) => (
                    <BrandFullWidthButton
                        key={option.value}
                        onPress={() => onClose([option])}>
                        {option.label}
                    </BrandFullWidthButton>
                ))}
            </DefaultView>
        </PageContainerScrollView>
    );
});

export default AutocompleteMultiSelectorModal;
