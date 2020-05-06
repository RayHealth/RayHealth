import * as React from "react";
import styled from "styled-components/native";

import {BrandFullWidthButton, SecondaryFullWidthButton} from "../../buttons";
import {
    useAutocompleteMultiSelectorModalGoBack,
    useCloseAutocompleteMultiSelectorModal,
} from "./routeHooks";
import {AMSValue} from "./constants";
import {useRoute} from "@react-navigation/native";
import {PageContainerScrollView} from "../../../appStack/styles";
import {HeaderBackButton} from "@react-navigation/stack";
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

export interface AutocompleteMultiSelectorModalParams {
    keyToMonitor: string;
    backRoute: string;
    label: string;
    staticData: AMSValue[];
    currentValue?: AMSValue[];
}

export const OverrideBackButton: React.FC = React.memo(() => {
    const goBack = useAutocompleteMultiSelectorModalGoBack();
    return <HeaderBackButton onPress={goBack} />;
});

const AutocompleteMultiSelectorModal: React.FC<any> = React.memo(({navigation}) => {
    const route = (useRoute() as unknown) as {
        params: AutocompleteMultiSelectorModalParams;
    };
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
                            currentValue && currentValue.some((v) => v === option);
                        return (
                            <ResultTouchableHighlight
                                key={option.value}
                                onPress={() => onClose([option])}
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
