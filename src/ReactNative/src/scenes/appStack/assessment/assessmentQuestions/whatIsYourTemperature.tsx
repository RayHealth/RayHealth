import * as React from "react";
import {
    AssessmentDescriptionText,
    AssessmentDescriptionView,
    AssessmentHeaderText,
    AssessmentHeaderView,
} from "./styles";
import CompleteSelfAssessmentButton from "./components/completeSelfAssessmentButton";

const WhatIsYourTemperature = () => {
    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    Thank you for completing your self assessment.
                </AssessmentHeaderText>
            </AssessmentHeaderView>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    Glad to hear you are feeling well!
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>
            <CompleteSelfAssessmentButton askForTemperature={true} />
        </>
    );
};

export default WhatIsYourTemperature;
