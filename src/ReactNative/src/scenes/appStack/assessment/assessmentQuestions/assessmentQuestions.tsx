import * as React from "react";
import {Assessment} from "@reduxShared/models/assessments/constants";
import WhatIsYourTemperature from "./whatIsYourTemperature";
import AssessSeverSymptoms from "./assessSevereSymptoms";
import Call911 from "./Call911";
import AssessWarningSymptoms from "./assessWarningSymptoms";
import Call811 from "./Call811";
import AssessMildSymptoms from "./assessMildSymptoms";
import YouMustSelfIsolate from "./youMustSelfIsolate";
import AssessOutOfCountry from "./assessOutOfCountry";

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
    if (
        assessment.severeDifficultyBreathing ||
        assessment.severeChestPain ||
        assessment.hardTimeWakingUp ||
        assessment.feelingConfused ||
        assessment.lostConsciousness
    ) {
        return <Call911 />;
    }
    if (
        isUndefined(assessment.shortnessOfBreathAtRest) ||
        isUndefined(assessment.inabilityToLieDown) ||
        isUndefined(assessment.chronicHealthConditionsExasperated)
    ) {
        return <AssessWarningSymptoms assessment={assessment} />;
    }
    if (
        assessment.shortnessOfBreathAtRest ||
        assessment.inabilityToLieDown ||
        assessment.chronicHealthConditionsExasperated
    ) {
        return <Call811 />;
    }
    if (
        isUndefined(assessment.fever) ||
        isUndefined(assessment.cough) ||
        isUndefined(assessment.shortnessOfBreath) ||
        isUndefined(assessment.difficultyBreathing) ||
        isUndefined(assessment.soreThroat) ||
        isUndefined(assessment.runnyNose)
    ) {
        return <AssessMildSymptoms assessment={assessment} />;
    }
    if (
        assessment.fever ||
        assessment.cough ||
        assessment.shortnessOfBreath ||
        assessment.difficultyBreathing ||
        assessment.soreThroat ||
        assessment.runnyNose
    ) {
        return <YouMustSelfIsolate />;
    }
    if (isUndefined(assessment.outOfCountryWithinLast14Days)) {
        return <AssessOutOfCountry assessment={assessment} />;
    }

    return null;
};

export default AssessmentQuestions;
