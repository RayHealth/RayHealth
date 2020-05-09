import * as React from "react";
import styled from "styled-components/native";

import {
    useAutocompleteMultiSelectorModalGoBack,
    useCloseAutocompleteMultiSelectorModal,
} from "./routeHooks";
import {useRoute, RouteProp} from "@react-navigation/native";
import {PageContainerScrollView} from "../../../appStack/styles";
import {HeaderBackButton, StackNavigationProp} from "@react-navigation/stack";
import RayHealthTextInput from "../RayHealthTextInput";
import {STYLE} from "../../../../config/styleDefaults";
import {
    mdiCheckBoxChecked,
    mdiCheckBoxUnchecked,
} from "../../../../services/staticImages";
import {
    Flex2ColumnContainerView,
    Flex2ColumnFixedChild,
    Flex2ColumnFlexibleChild,
} from "../../../utils/flex2Column1FixedWidth";
import {PrimaryStackParamList} from "../../../router/appStackRoutes";
import {PATHS} from "../../../router/constants";
import {AMSPayload} from "./utils";

export const OverrideBackButton: React.FC = React.memo(() => {
    const goBack = useAutocompleteMultiSelectorModalGoBack();
    return <HeaderBackButton onPress={goBack} />;
});

export interface AutocompleteMultiSelectorParams {
    keyToMonitor: string;
    backRoute: string;
    label: string;
    staticData: AMSPayload[];
    currentValue?: AMSPayload[];
}

type AutocompleteMultiSelectorModalNavigationProps = StackNavigationProp<
    PrimaryStackParamList,
    PATHS.MODALS_FORM_AUTOCOMPLETE_MULTI_SELECT
>;
export type AutocompleteMultiSelectorModalRouteProp = RouteProp<
    PrimaryStackParamList,
    PATHS.MODALS_FORM_AUTOCOMPLETE_MULTI_SELECT
>;

const AutocompleteMultiSelectorModal: React.FC<{
    navigation: AutocompleteMultiSelectorModalNavigationProps;
}> = React.memo(({navigation}) => {
    const route = useRoute<AutocompleteMultiSelectorModalRouteProp>();
    const {label, staticData, currentValue} = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: label,
        });
    }, [navigation, label]);
    const onClose = useCloseAutocompleteMultiSelectorModal();

    const [filterText, setFilterText] = React.useState<string>("");

    return (
        <>
            <SearchAreaView>
                <RayHealthTextInput
                    placeholder="Filter results"
                    value={filterText}
                    onChange={setFilterText}
                />
            </SearchAreaView>
            <PageContainerScrollView>
                <ResultsContainerView>
                    {staticData.map((option) => {
                        if (
                            filterText &&
                            !option.label.toLowerCase().includes(filterText.toLowerCase())
                        ) {
                            return null;
                        }
                        const isSelected =
                            currentValue &&
                            currentValue.some((v) => v.value === option.value);
                        return (
                            <ResultTouchableHighlight
                                key={option.value}
                                onPress={() => onClose(isSelected ? [] : [option])}
                                underlayColor={STYLE.COLORS.GREYD}>
                                <ResultView isSelected={isSelected}>
                                    <Flex2ColumnFlexibleChild>
                                        <ResultLabelText isSelected={isSelected}>
                                            {option.label}
                                        </ResultLabelText>
                                    </Flex2ColumnFlexibleChild>
                                    <Flex2ColumnFixedChild width={35}>
                                        <ResultCheckBoxImage
                                            source={
                                                isSelected
                                                    ? mdiCheckBoxChecked
                                                    : mdiCheckBoxUnchecked
                                            }
                                        />
                                    </Flex2ColumnFixedChild>
                                </ResultView>
                            </ResultTouchableHighlight>
                        );
                    })}
                </ResultsContainerView>
            </PageContainerScrollView>
        </>
    );
});

export default AutocompleteMultiSelectorModal;

const SearchAreaView = styled.View`
    padding-left: 10px;
    padding-right: 10px;
`;

const ResultsContainerView = styled.View`
    padding-left: 10px;
    padding-right: 10px;
`;

interface ResultViewProps {
    isSelected: boolean;
}
const ResultTouchableHighlight = styled.TouchableHighlight``;
const ResultView = styled(Flex2ColumnContainerView)`
    align-items: center;
    border-width: 1px;
    border-color: ${({isSelected}: ResultViewProps) =>
        isSelected ? STYLE.COLORS.BRAND : STYLE.COLORS.GREY3};
    padding: 15px;
    background: ${STYLE.COLORS.WHITE};
    margin-bottom: 5px;
`;
const ResultLabelText = styled.Text`
    color: ${({isSelected}: ResultViewProps) =>
        isSelected ? STYLE.COLORS.BRAND : STYLE.COLORS.GREY3};
`;
const ResultCheckBoxImage = styled.Image`
    height: 24px;
    width: 24px;
`;
