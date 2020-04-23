import * as React from "react";
import {Assessment} from "@reduxShared/models/assessments/constants";
import WhatIsYourTemperature from "./whatIsYourTemperature";
import AssessSeverSymptoms from "./assessSeverSymptoms";

export interface AssessmentQuestionsProps {
    assessment: Assessment;
}
const isUndefined = (check: boolean | undefined) => typeof check === "undefined";
const AssessmentQuestions: React.FC<AssessmentQuestionsProps> = ({assessment}) => {
    if (assessment.feelingGood) {
        return <WhatIsYourTemperature />;
    }
    if (
        isUndefined(assessment.severeDifficultyBreathing) ||
        isUndefined(assessment.severeChestPain) ||
        isUndefined(assessment.hardTimeWakingUp) ||
        isUndefined(assessment.feelingConfused) ||
        isUndefined(assessment.lostConsciousness)
    ) {
        return <AssessSeverSymptoms assessment={assessment} />;
    }
    return null;
};

export default AssessmentQuestions;
