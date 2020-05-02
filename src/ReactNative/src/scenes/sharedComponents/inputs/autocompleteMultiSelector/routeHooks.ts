import {useRoute} from "@react-navigation/native";
import * as React from "react";
import NavigationService from "../../../../services/navigationService";
import {useSelector} from "react-redux";
import {getCurrentScreenPath} from "../../../../store/models/appState/selectors";
import {APP_STACK_ROUTES} from "../../../router/constants";
import {AMSValue} from "./constants";
import {AutocompleteMultiSelectorModalParams} from "./autocompleteMultiSelectorModal";

export const useOpenAutocompleteMultiSelectorModal = (
    label: string,
    staticData: AMSValue[],
    currentValue?: AMSValue[],
) => {
    const backRoute = useSelector(getCurrentScreenPath);
    return React.useCallback(
        () =>
            NavigationService.navigate(
                APP_STACK_ROUTES.MODALS.FORM.AUTOCOMPLETE_MULTI_SELECT.path,
                {backRoute, label, currentValue, staticData},
            ),
        [backRoute, label, currentValue, staticData],
    );
};
let postOnce = 0;
const amsValuesToString = (amsValues: AMSValue[]) =>
    amsValues
        .map((o) => o.value)
        .sort()
        .join("~");
const areAMSValuesEqual = (a: AMSValue[], b: AMSValue[]): boolean =>
    amsValuesToString(a) === amsValuesToString(b);
export const useDetectAutoCompleteMultiSelectorChange = (
    onChange: (newValues: AMSValue[]) => void,
    currentValue?: AMSValue[],
): void => {
    const route = (useRoute() as unknown) as {
        params: {newValue: AMSValue[]};
    };
    const {newValue} = route.params;
    if (newValue) {
        if (!currentValue || !areAMSValuesEqual(currentValue, newValue)) {
            onChange(newValue);
        }
        NavigationService.setParams({newValue: undefined});
    }
};

export const useCloseAutocompleteMultiSelectorModal = () => {
    const route = (useRoute() as unknown) as {
        params: AutocompleteMultiSelectorModalParams;
    };
    const {backRoute} = route.params;
    return React.useCallback(
        (newValue: AMSValue[]) => NavigationService.navigate(backRoute, {newValue}),
        [backRoute],
    );
};
