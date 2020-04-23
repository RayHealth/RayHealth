import styled from "styled-components/native";
import {STYLE} from "../../../../config/styleDefaults";

export const AssessmentQuestionHeaderView = styled.View`
    margin-top: 10px;
    margin-bottom: 20px;
`;
export const AssessmentQuestionHeaderText = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: ${STYLE.COLORS.BRAND7};
`;

export const AssessmentQuestionDescriptionView = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const AssessmentQuestionDescriptionText = styled.Text`
    font-size: 25px;
    color: ${STYLE.COLORS.BRAND3};
`;

export const DividerView = styled.View`
    border-top-width: 1px;
    border-top-color: ${STYLE.COLORS.BRANDg};
    margin-top: 10px;
    margin-bottom: 10px;
`;
