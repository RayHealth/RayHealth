import * as React from "react";
import {ImageSourcePropType} from "react-native";
import styled from "styled-components";
import {DefaultText, STYLE} from "../../../config/styleDefaults";
import {
    Flex2ColumnContainerView,
    Flex2ColumnFlexibleChild,
    Flex2ColumnFixedChild,
} from "../../utils/flex2Column1FixedWidth";

const ICON_SIZE = 25;

interface BaseFullWidthButtonOwnProps {
    onPress: () => void;
    children: string;
    rightIcon?: ImageSourcePropType;
    rightIconDisabled?: ImageSourcePropType;
}
type BaseFullWidthButtonProps = BaseFullWidthButtonOwnProps &
    FullWidthButtonTouchableHighlightProps &
    FullWidthButtonTextProps;

const BaseFullWidthButton: React.FC<BaseFullWidthButtonProps> = React.memo(
    ({children, onPress, color, backgroundColor, borderColor, rightIcon}) => (
        <FullWidthButtonTouchableHighlight
            onPress={onPress}
            backgroundColor={backgroundColor}
            borderColor={borderColor}>
            <Flex2ColumnContainerView alignItems="center">
                <Flex2ColumnFlexibleChild>
                    <FullWidthButtonText color={color}>{children}</FullWidthButtonText>
                </Flex2ColumnFlexibleChild>
                {rightIcon && (
                    <Flex2ColumnFixedChild width={ICON_SIZE}>
                        <RightIcon source={rightIcon} />
                    </Flex2ColumnFixedChild>
                )}
            </Flex2ColumnContainerView>
        </FullWidthButtonTouchableHighlight>
    ),
);

const RightIcon = styled.Image`
    height: ${ICON_SIZE}px;
    width: ${ICON_SIZE}px;
    margin-left: 10px;
`;

interface FullWidthButtonTouchableHighlightProps {
    backgroundColor: string;
    borderColor: string;
}
export const FullWidthButtonTouchableHighlight = styled.TouchableHighlight`
    background-color: ${({backgroundColor}: FullWidthButtonTouchableHighlightProps) =>
        backgroundColor};
    border-width: 1px;
    border-color: ${({borderColor}: FullWidthButtonTouchableHighlightProps) =>
        borderColor};
    padding-top: ${STYLE.FONT_SIZES.INPUT * 0.8}px;
    padding-bottom: ${STYLE.FONT_SIZES.INPUT * 0.8}px;
    padding-left: ${STYLE.FONT_SIZES.INPUT * 0.8}px;
    padding-right: ${STYLE.FONT_SIZES.INPUT * 0.8}px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: ${STYLE.BORDER_RADIUS.INPUT}px;
    align-items: center;
`;
interface FullWidthButtonTextProps {
    color: string;
    bold?: true;
}
export const FullWidthButtonText = styled(DefaultText)`
    font-size: ${STYLE.FONT_SIZES.BUTTON_TEXT}px;
    color: ${({color}: FullWidthButtonTextProps) => color};
    font-weight: ${({bold}: FullWidthButtonTextProps) => (bold ? "bold" : "normal")};
`;

export const BrandFullWidthButton: React.FC<BaseFullWidthButtonOwnProps> = ({
    children,
    onPress,
}) => (
    <BaseFullWidthButton
        onPress={onPress}
        backgroundColor={STYLE.COLORS.BRAND}
        borderColor={STYLE.COLORS.BRAND}
        color={STYLE.COLORS.BRANDi}>
        {children}
    </BaseFullWidthButton>
);
export const SecondaryFullWidthButton: React.FC<BaseFullWidthButtonOwnProps> = ({
    children,
    onPress,
    rightIcon,
}) => (
    <BaseFullWidthButton
        onPress={onPress}
        backgroundColor={STYLE.COLORS.WHITE}
        borderColor={STYLE.COLORS.BRAND}
        color={STYLE.COLORS.BRAND}
        rightIcon={rightIcon}>
        {children}
    </BaseFullWidthButton>
);
export const WarningFullWidthButton: React.FC<BaseFullWidthButtonOwnProps> = ({
    children,
    onPress,
}) => (
    <BaseFullWidthButton
        onPress={onPress}
        backgroundColor={STYLE.COLORS.WARNING_YELLOW}
        borderColor={STYLE.COLORS.WARNING_YELLOW}
        color={STYLE.COLORS.GREY2}
        bold={true}>
        {children}
    </BaseFullWidthButton>
);

export const LightFullWidthButton: React.FC<BaseFullWidthButtonOwnProps> = ({
    children,
    onPress,
}) => (
    <BaseFullWidthButton
        onPress={onPress}
        backgroundColor={STYLE.COLORS.GREYE}
        borderColor={STYLE.COLORS.GREY9}
        color={STYLE.COLORS.GREY2}>
        {children}
    </BaseFullWidthButton>
);
export const EmergencyFullWidthButton: React.FC<BaseFullWidthButtonOwnProps> = ({
    children,
    onPress,
}) => (
    <BaseFullWidthButton
        onPress={onPress}
        backgroundColor={STYLE.COLORS.EMERGENCY_RED}
        borderColor={STYLE.COLORS.EMERGENCY_RED}
        color={STYLE.COLORS.WHITE}>
        {children}
    </BaseFullWidthButton>
);

export const ComplimentaryFullWidthButton: React.FC<BaseFullWidthButtonOwnProps> = ({
    children,
    onPress,
}) => (
    <BaseFullWidthButton
        onPress={onPress}
        backgroundColor={STYLE.COLORS.BRAND_COMPLIMENTARYe}
        borderColor={STYLE.COLORS.BRAND_COMPLIMENTARY}
        color={STYLE.COLORS.BRAND_COMPLIMENTARY3}>
        {children}
    </BaseFullWidthButton>
);
