import * as React from "react";
import {
    AssessmentCalloutText,
    AssessmentCalloutView,
    AssessmentDescriptionText,
    AssessmentDescriptionView,
    AssessmentHeaderText,
    AssessmentHeaderView,
} from "./styles";

interface YouDontNeedToBeTestedProps {}
const YouDontNeedToBeTested: React.FC<YouDontNeedToBeTestedProps> = () => {
    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    You don't need to be tested for COVID-19. Take steps to protect
                    yourself and others.
                </AssessmentHeaderText>
            </AssessmentHeaderView>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    All Albertans have a responsibility to help prevent the spread of
                    COVID-19. There are steps you can take to protect yourself and others.
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>
            <AssessmentCalloutView>
                <AssessmentCalloutText>
                    Practice physical distancing. This is not the same as self-isolation.
                    You do not need to remain indoors, but you do need to avoid being in
                    close contact with people.
                </AssessmentCalloutText>
            </AssessmentCalloutView>
            <AssessmentCalloutView>
                <AssessmentCalloutText>
                    Practice good hygiene: wash hands often, cover coughs and sneezes, and
                    avoid touching your face.
                </AssessmentCalloutText>
            </AssessmentCalloutView>
            <AssessmentCalloutView>
                <AssessmentCalloutText>
                    Monitor for COVID-19 symptoms: fever, cough, shortness of breath, sore
                    throat or runny nose.
                </AssessmentCalloutText>
            </AssessmentCalloutView>
            <AssessmentCalloutView>
                <AssessmentCalloutText>
                    If you do develop any COVID-19 symptoms, stay home and take this
                    self-assessment again.
                </AssessmentCalloutText>
            </AssessmentCalloutView>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    If you have any other questions about COVID-19, please visit
                    AHS.ca/COVID.
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>
        </>
    );
};

export default YouDontNeedToBeTested;
