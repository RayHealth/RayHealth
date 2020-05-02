import * as React from "react";
import {DefaultText, STYLE} from "../../../config/styleDefaults";
import styled from "styled-components/native";
import {Platform, TouchableWithoutFeedback} from "react-native";
import {useCallback} from "react";

type TextContentType =
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode";
type KeyboardType =
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
// | "ascii-capable" // ios-only
// | "numbers-and-punctuation" // ios-only
// | "url" // ios-only
// | "name-phone-pad" // ios-only
// | "twitter" // ios-only
// | "web-search" // ios-only
// | "visible-password" // android only

interface TextInputProps {
    multiline?: boolean;
    maxLength?: number;
    placeholder?: string;
    onChangeText: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    autoFocus?: boolean;
    selectionColor?: string;
    underlineColorAndroid?: string;
    value?: string;
    clearButtonMode?: "always"; //|"never"|"while-editing"|"unless-editing";
    // https://facebook.github.io/react-native/docs/next/textinput#textcontenttype
    textContentType?: TextContentType;
    keyboardType?: KeyboardType;
}
const TextInput: React.FC<TextInputProps> = ({
    multiline,
    maxLength,
    placeholder,
    onChangeText,
    onFocus,
    onBlur,
    autoFocus,
    selectionColor,
    underlineColorAndroid,
    value,
    clearButtonMode,
    textContentType,
    keyboardType,
}) => {
    const handleOnBlur = useCallback(() => onBlur && onBlur(), [onBlur]);
    const handleOnClear = useCallback(() => onChangeText(""), [onChangeText]);
    const handleOnFocus = useCallback(() => onFocus && onFocus(), [onFocus]);
    return (
        <TextInputContainer>
            <StyledTextInput
                multiline={multiline}
                maxLength={maxLength}
                placeholder={placeholder}
                placeholderTextColor={STYLE.COLORS.GREYC}
                onChangeText={onChangeText}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                autoFocus={autoFocus}
                selectionColor={selectionColor}
                underlineColorAndroid={underlineColorAndroid || STYLE.COLORS.TRANSPARENT}
                value={value}
                clearButtonMode={clearButtonMode}
                keyboardType={keyboardType || "default"}
                textContentType={textContentType}
            />
            {Platform.OS !== "ios" && !!value && clearButtonMode === "always" && (
                <TextInputClearButtonAndroidOnlyContainer>
                    <TouchableWithoutFeedback onPress={handleOnClear}>
                        <DefaultText>&times;</DefaultText>
                    </TouchableWithoutFeedback>
                </TextInputClearButtonAndroidOnlyContainer>
            )}
        </TextInputContainer>
    );
};

export default TextInput;

const IosStyledTextInput = styled.TextInput`
    font-size: ${STYLE.FONT_SIZES.INPUT}px;
    letter-spacing: 0.2px;
    color: ${STYLE.COLORS.BRAND1};
`;

const AndroidStyledTextInput = styled(IosStyledTextInput)`
    padding-top: 0;
    padding-bottom: 0;
`;
const StyledTextInput = Platform.select({
    ios: IosStyledTextInput,
    android: AndroidStyledTextInput,
});

const TextInputContainer = styled.View`
    background-color: ${STYLE.COLORS.WHITE};
    border-width: 1px;
    border-color: ${STYLE.COLORS.BRAND};
    border-radius: ${STYLE.BORDER_RADIUS.INPUT}px;
    padding-top: ${STYLE.FONT_SIZES.INPUT * 0.5}px;
    padding-right: ${STYLE.FONT_SIZES.INPUT * 0.5}px;
    padding-left: ${STYLE.FONT_SIZES.INPUT * 0.5}px;
    padding-bottom: ${STYLE.FONT_SIZES.INPUT * 0.5}px;
    justify-content: center;
`;
const TextInputClearButtonAndroidOnlyContainer = styled.View`
    position: absolute;
    top: 0;
    padding-top: 5;
    right: 15;
`;
