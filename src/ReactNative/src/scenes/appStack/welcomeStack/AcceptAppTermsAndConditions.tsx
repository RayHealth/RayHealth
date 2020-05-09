import * as React from "react";
import styled from "styled-components/native";
import {currentTermsAndConditionsText} from "@reduxShared/models/currentUser/termsAndConditions";
import Toggle from "../toggle";
import {STYLE} from "../../../config/styleDefaults";

interface AcceptAppTermsAndConditionsProps {
    acceptToggle: boolean;
    setAcceptToggle: (v: boolean) => void;
}
const AcceptAppTermsAndConditions: React.FC<AcceptAppTermsAndConditionsProps> = ({
    acceptToggle,
    setAcceptToggle,
}) => {
    return (
        <>
            <TermsAndConditionsScrollableView>
                <TermsAndConditionsText>
                    {currentTermsAndConditionsText}
                </TermsAndConditionsText>
            </TermsAndConditionsScrollableView>

            <Toggle toggleFunc={setAcceptToggle} value={acceptToggle}>
                I accept terms and conditions
            </Toggle>
        </>
    );
};

export default AcceptAppTermsAndConditions;

const TermsAndConditionsScrollableView = styled.ScrollView`
    border-width: 1px;
    border-color: ${STYLE.COLORS.GREY3};
`;
const TermsAndConditionsText = styled.Text``;
