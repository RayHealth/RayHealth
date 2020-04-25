import * as React from "react";
import styled from "styled-components";
import {DefaultText, STYLE} from "../../../config/styleDefaults";

interface BaseFullWidthButtonOwnProps {
    onPress: () => void;
    children: string;
}
type BaseFullWidthButtonProps = BaseFullWidthButtonOwnProps &
    FullWidthButtonTouchableHighlightProps &
    FullWidthButtonTextProps;

const BaseFullWidthButton: React.FC<BaseFullWidthButtonProps> = React.memo(
    ({children, onPress, color, backgroundColor, borderColor}) => (
        <FullWidthButtonTouchableHighlight
            onPress={onPress}
            backgroundColor={backgroundColor}
            borderColor={borderColor}>
            <FullWidthButtonText color={color}>{children}</FullWidthButtonText>
        </FullWidthButtonTouchableHighlight>
    ),
);

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
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
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
        color={STYLE.COLORS.BRANDh}>
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
export const SecondaryFullWidthButton: React.FC<BaseFullWidthButtonOwnProps> = ({
    children,
    onPress,
}) => (
    <BaseFullWidthButton
        onPress={onPress}
        backgroundColor={STYLE.COLORS.BRANDi}
        borderColor={STYLE.COLORS.BRAND}
        color={STYLE.COLORS.BRAND}>
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
