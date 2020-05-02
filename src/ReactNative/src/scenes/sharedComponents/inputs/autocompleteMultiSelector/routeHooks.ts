import {useRoute} from "@react-navigation/native";
import * as React from "react";
import NavigationService from "../../../../services/navigationService";
import {useSelector} from "react-redux";
import {getCurrentScreenPath} from "../../../../store/models/appState/selectors";
import {APP_STACK_ROUTES} from "../../../router/constants";

export const useOpenAutocompleteMultiSelectorModal = () => {
    const backRoute = useSelector(getCurrentScreenPath);
    return React.useCallback(
        () =>
            NavigationService.navigate(
                APP_STACK_ROUTES.MODALS.FORM.AUTOCOMPLETE_MULTI_SELECT.path,
                {backRoute},
            ),
        [backRoute],
    );
};

export const useCloseAutocompleteMultiSelectorModal = () => {
    const route = (useRoute() as unknown) as {params: {backRoute: string}};
    const {backRoute} = route.params;
    return React.useCallback(() => NavigationService.navigate(backRoute), [backRoute]);
};
