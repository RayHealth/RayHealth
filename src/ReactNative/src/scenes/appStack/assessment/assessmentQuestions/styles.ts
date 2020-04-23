import styled from "styled-components/native";
import {STYLE} from "../../../../config/styleDefaults";

export const AssessmentHeaderView = styled.View`
    margin-top: 10px;
    margin-bottom: 20px;
`;
export const AssessmentHeaderText = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: ${STYLE.COLORS.BRAND7};
`;

export const AssessmentDescriptionView = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const AssessmentDescriptionText = styled.Text`
    font-size: 25px;
    color: ${STYLE.COLORS.BRAND3};
`;

export const AssessmentCalloutView = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    border-left-width: 3px;
    border-left-color: ${STYLE.COLORS.BRAND};
    padding-left: 10px;
`;
export const AssessmentCalloutText = styled.Text`
    font-size: 25px;
    color: ${STYLE.COLORS.BRAND3};
    font-weight: bold;
`;

export const DividerView = styled.View`
    border-top-width: 1px;
    border-top-color: ${STYLE.COLORS.BRANDg};
    margin-top: 10px;
    margin-bottom: 10px;
`;
