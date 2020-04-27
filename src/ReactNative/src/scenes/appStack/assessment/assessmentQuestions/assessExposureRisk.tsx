import * as React from "react";
import {AssessmentQuestionsProps} from "./assessmentQuestions";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {
    saveExposureRisk,
    saveMildSymptoms,
} from "@reduxShared/models/assessments/actions";
import {AssessmentHeaderText, AssessmentHeaderView, DividerView} from "./styles";
import {
    BrandFullWidthButton,
    LightFullWidthButton,
    SecondaryFullWidthButton,
} from "../../../sharedComponents/buttons";
import Toggle from "../../toggle";
import {useState} from "react";

const AssessExposureRisk: React.FC<AssessmentQuestionsProps> = ({assessment}) => {
    const [outOfCountryWithinLast14Days, setOutOfCountryWithinLast14Days] = useState<
        boolean
    >(!!assessment.outOfCountryWithinLast14Days);
    const [contactWithPositiveCovid19Case, setContactWithPositiveCovid19Case] = useState<
        boolean
    >(!!assessment.contactWithPositiveCovid19Case);
    const dispatch = useDispatch();
    const onContinue = useCallback(() => {
        console.log("Was not out of country");
        dispatch(
            saveExposureRisk(
                outOfCountryWithinLast14Days,
                contactWithPositiveCovid19Case,
            ),
        );
    }, [dispatch, outOfCountryWithinLast14Days, contactWithPositiveCovid19Case]);
    const goBack = useCallback(() => {
        dispatch(
            saveMildSymptoms(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
            ),
        );
    }, [dispatch]);

    const allFalse = !outOfCountryWithinLast14Days && !contactWithPositiveCovid19Case;
    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>In the past 14 days...</AssessmentHeaderText>
            </AssessmentHeaderView>
            <Toggle
                value={outOfCountryWithinLast14Days}
                toggleFunc={setOutOfCountryWithinLast14Days}>
                I returned from travel outside of Canada
            </Toggle>
            <Toggle
                value={contactWithPositiveCovid19Case}
                toggleFunc={setContactWithPositiveCovid19Case}>
                I had close contact with someone who is confirmed as having COVID-19
            </Toggle>

            <DividerView />
            {allFalse ? (
                <SecondaryFullWidthButton onPress={onContinue}>
                    None of the above
                </SecondaryFullWidthButton>
            ) : (
                <BrandFullWidthButton onPress={onContinue}>Continue</BrandFullWidthButton>
            )}

            <DividerView />
            <LightFullWidthButton onPress={goBack}>
                Return to previous question.
            </LightFullWidthButton>
        </>
    );
};

export default AssessExposureRisk;
