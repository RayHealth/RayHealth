import * as React from "react";
import {
    AssessmentDescriptionText,
    AssessmentDescriptionView,
    AssessmentHeaderText,
    AssessmentHeaderView,
    DividerView,
} from "./styles";
import {useCallback} from "react";
import {LightFullWidthButton} from "../../../sharedComponents/buttons";
import {CalloutSectionView, CalloutSectionText} from "../../../../config/styleDefaults";

interface YouMustSelfIsolateProps {}
const YouMustSelfIsolate: React.FC<YouMustSelfIsolateProps> = () => {
    const goBack = useCallback(() => {
        console.log("GO back");
    }, []);
    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    You must immediately self-isolate. You may need to be tested for
                    COVID-19.
                </AssessmentHeaderText>
            </AssessmentHeaderView>

            <CalloutSectionView>
                <CalloutSectionText>
                    You must self-isolate until you receive further instructions
                </CalloutSectionText>
            </CalloutSectionView>

            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    As of March 25, Albertans are legally required under public health
                    order to self-isolate for 10 days from the onset of any COVID-19
                    symptoms which are not related to a pre-existing illness or health
                    condition. If your symptoms resolve prior to the 10 days, you must
                    continue to self-isolate because you may still be infectious.
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    &bull; Do not visit a hospital, physician’s office, lab or healthcare
                    facility without consulting Health Link (811) first.
                </AssessmentDescriptionText>
                <AssessmentDescriptionText>
                    &bull; Don't go to any public places.
                </AssessmentDescriptionText>
                <AssessmentDescriptionText>
                    &bull; Stay at home, and don’t have any visitors.
                </AssessmentDescriptionText>
                <AssessmentDescriptionText>
                    &bull; Don’t share personal items like dishes, utensils, or towels.
                </AssessmentDescriptionText>
                <AssessmentDescriptionText>
                    &bull; Wash your hands often.
                </AssessmentDescriptionText>
                <AssessmentDescriptionText>
                    &bull; Avoid close contact with other people, especially those with
                    chronic conditions, a compromised immune system, or seniors (over 65
                    years of age).
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    If your symptoms worsen, call 811. We are experiencing heavy call
                    volumes and will get to your call as quickly as we can.
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    Call 911 if you are seriously ill and need immediate medical
                    attention. Inform them that you may have COVID-19.
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>

            <CalloutSectionView>
                <CalloutSectionText>
                    Please provide your contact information and healthcare number below.
                    You will be contacted to confirm your symptoms and discuss next steps
                    which may include a referral for testing.
                </CalloutSectionText>
            </CalloutSectionView>

            <CalloutSectionView>
                <CalloutSectionText>
                    The COVID-19 test is only for people who currently have symptoms of
                    the virus. The test does not show if you were infected in the past and
                    are no longer symptomatic.
                </CalloutSectionText>
            </CalloutSectionView>

            <DividerView />

            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    To do: {`\n`}
                    &bull; add form to collect information and submit{`\n`}
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>

            <DividerView />
            <LightFullWidthButton onPress={goBack}>
                Return to previous question.
            </LightFullWidthButton>
        </>
    );
};

export default YouMustSelfIsolate;
