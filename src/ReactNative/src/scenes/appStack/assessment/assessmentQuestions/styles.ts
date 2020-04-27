import styled from "styled-components/native";
import {DefaultText, HeaderText, STYLE} from "../../../../config/styleDefaults";

export const AssessmentHeaderView = styled.View`
    margin-top: 10px;
    margin-bottom: 20px;
`;
export const AssessmentHeaderText = styled(HeaderText)`
    color: ${STYLE.COLORS.BRAND7};
`;

export const AssessmentDescriptionView = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const AssessmentDescriptionText = styled(DefaultText)`
    color: ${STYLE.COLORS.BRAND3};
`;

export const AssessmentCalloutView = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    border-left-width: 3px;
    border-left-color: ${STYLE.COLORS.BRAND};
    padding-left: 10px;
`;
export const AssessmentCalloutText = styled(DefaultText)`
    color: ${STYLE.COLORS.BRAND3};
    font-weight: bold;
`;

export const DividerView = styled.View`
    border-top-width: 1px;
    border-top-color: ${STYLE.COLORS.BRANDg};
    margin-top: 10px;
    margin-bottom: 10px;
`;
