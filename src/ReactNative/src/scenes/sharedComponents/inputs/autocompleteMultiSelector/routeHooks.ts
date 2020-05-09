import {useRoute} from "@react-navigation/native";
import * as React from "react";
import NavigationService from "../../../../services/navigationService";
import {useSelector} from "react-redux";
import {getCurrentScreenPath} from "../../../../store/models/appState/selectors";
import {APP_STACK_ROUTES} from "../../../router/constants";
import {AMSValue} from "./constants";
import {AutocompleteMultiSelectorModalRouteProp} from "./autocompleteMultiSelectorModal";

export const useOpenAutocompleteMultiSelectorModal = (
    keyToMonitor: string,
    label: string,
    staticData: AMSValue[],
    currentValue?: AMSValue[],
) => {
    const backRoute = useSelector(getCurrentScreenPath);
    return React.useCallback(
        () =>
            NavigationService.navigate(
                APP_STACK_ROUTES.MODALS.FORM.AUTOCOMPLETE_MULTI_SELECT.path,
                {keyToMonitor, backRoute, label, currentValue, staticData},
            ),
        [keyToMonitor, backRoute, label, currentValue, staticData],
    );
};

const amsValuesToString = (amsValues: AMSValue[]) =>
    amsValues
        .map((o) => o.value)
        .sort()
        .join("~");
const areAMSValuesEqual = (a: AMSValue[], b: AMSValue[]): boolean =>
    amsValuesToString(a) === amsValuesToString(b);
export const useDetectAutoCompleteMultiSelectorChange = (
    key2Monitor: string,
    onChange: (newValues: AMSValue[] | []) => void,
    currentValue?: AMSValue[],
): void => {
    const route = (useRoute() as unknown) as {
        params: {newValue: AMSValue[]; keyToMonitor: string};
    };
    const {newValue, keyToMonitor} = route.params;
    // console.log(keyToMonitor, key2Monitor);
    if (newValue && keyToMonitor === key2Monitor) {
        if (!currentValue || !areAMSValuesEqual(currentValue, newValue)) {
            onChange(newValue);
        }
        NavigationService.setParams({newValue: undefined});
    }
};

export const useCloseAutocompleteMultiSelectorModal = () => {
    const route = useRoute<AutocompleteMultiSelectorModalRouteProp>();
    const {keyToMonitor, backRoute} = route.params;
    return React.useCallback(
        (newValue: AMSValue[]) =>
            NavigationService.navigate(backRoute, {keyToMonitor, newValue}),
        [backRoute, keyToMonitor],
    );
};
export const useAutocompleteMultiSelectorModalGoBack = () => {
    const route = useRoute<AutocompleteMultiSelectorModalRouteProp>();
    const {backRoute} = route.params;
    return React.useCallback(() => NavigationService.navigate(backRoute), [backRoute]);
};
