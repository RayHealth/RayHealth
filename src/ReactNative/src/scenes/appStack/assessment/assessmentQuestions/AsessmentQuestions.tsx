import * as React from "react";
import {Assessment} from "@reduxShared/models/assessments/constants";
import WhatIsYourTemperature from "./whatIsYourTemperature";

interface AssessmentQuestionsProps {
    assessment: Assessment;
}

const AssessmentQuestions: React.FC<AssessmentQuestionsProps> = ({assessment}) => {
    if (assessment.feelingGood) {
        return <WhatIsYourTemperature />;
    }
    return null;
};

export default AssessmentQuestions;
