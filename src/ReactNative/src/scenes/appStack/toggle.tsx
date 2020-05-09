import * as React from "react";
import {useCallback} from "react";
import {DefaultText, STYLE} from "../../config/styleDefaults";
import styled from "styled-components/native";
import {mdiCheckBoxChecked, mdiCheckBoxUnchecked} from "../../services/staticImages";
import {
    Flex2ColumnContainerView,
    Flex2ColumnFixedChild,
    Flex2ColumnFlexibleChild,
} from "../utils/flex2Column1FixedWidth";

interface ToggleProps {
    children: string;
    toggleFunc: (v: boolean) => void;
    value: boolean;
}

const Toggle: React.FC<ToggleProps> = ({children, toggleFunc, value}) => {
    const onClick = useCallback(() => {
        toggleFunc(!value);
    }, [toggleFunc, value]);
    return value ? (
        <ToggleActiveTouchableHighlight onPress={onClick}>
            <Flex2ColumnContainerView alignItems="center">
                <Flex2ColumnFixedChild width={35}>
                    <ToggleIcon source={mdiCheckBoxChecked} />
                </Flex2ColumnFixedChild>
                <Flex2ColumnFlexibleChild>
                    <ToggleActiveText>{children}</ToggleActiveText>
                </Flex2ColumnFlexibleChild>
            </Flex2ColumnContainerView>
        </ToggleActiveTouchableHighlight>
    ) : (
        <ToggleNotActiveTouchableHighlight onPress={onClick}>
            <Flex2ColumnContainerView alignItems="center">
                <Flex2ColumnFixedChild width={35}>
                    <ToggleIcon source={mdiCheckBoxUnchecked} />
                </Flex2ColumnFixedChild>
                <Flex2ColumnFlexibleChild>
                    <ToggleNotActiveText>{children}</ToggleNotActiveText>
                </Flex2ColumnFlexibleChild>
            </Flex2ColumnContainerView>
        </ToggleNotActiveTouchableHighlight>
    );
};

export default Toggle;

const ToggleIcon = styled.Image`
    margin-top: 3px;
    height: 25px;
    width: 25px;
    margin-right: 10px;
`;
const ToggleActiveTouchableHighlight = styled.TouchableHighlight`
    background-color: ${STYLE.COLORS.BRANDi};
    border-width: 1px;
    border-color: ${STYLE.COLORS.BRAND};
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`;
const ToggleActiveText = styled(DefaultText)`
    font-size: ${STYLE.FONT_SIZES.BUTTON_TEXT}px;
    color: ${STYLE.COLORS.BRAND3};
`;

const ToggleNotActiveTouchableHighlight = styled(ToggleActiveTouchableHighlight)`
    background-color: ${STYLE.COLORS.GREYE};
    border-color: ${STYLE.COLORS.GREY9};
`;
const ToggleNotActiveText = styled(ToggleActiveText)`
    color: ${STYLE.COLORS.GREY2};
`;
