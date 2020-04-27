import * as React from "react";
import {
    AssessmentDescriptionText,
    AssessmentDescriptionView,
    AssessmentHeaderText,
    AssessmentHeaderView,
} from "./styles";
import {CalloutSectionView, CalloutSectionText} from "../../../../config/styleDefaults";

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
            <CalloutSectionView>
                <CalloutSectionText>
                    Practice physical distancing. This is not the same as self-isolation.
                    You do not need to remain indoors, but you do need to avoid being in
                    close contact with people.
                </CalloutSectionText>
            </CalloutSectionView>
            <CalloutSectionView>
                <CalloutSectionText>
                    Practice good hygiene: wash hands often, cover coughs and sneezes, and
                    avoid touching your face.
                </CalloutSectionText>
            </CalloutSectionView>
            <CalloutSectionView>
                <CalloutSectionText>
                    Monitor for COVID-19 symptoms: fever, cough, shortness of breath, sore
                    throat or runny nose.
                </CalloutSectionText>
            </CalloutSectionView>
            <CalloutSectionView>
                <CalloutSectionText>
                    If you do develop any COVID-19 symptoms, stay home and take this
                    self-assessment again.
                </CalloutSectionText>
            </CalloutSectionView>
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
