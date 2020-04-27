import * as React from "react";
import {AssessmentQuestionsProps} from "./assessmentQuestions";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {
    saveMildSymptoms,
    saveWarningSymptoms,
} from "@reduxShared/models/assessments/actions";
import {AssessmentHeaderText, AssessmentHeaderView, DividerView} from "./styles";
import Toggle from "../../toggle";
import {
    BrandFullWidthButton,
    LightFullWidthButton,
    SecondaryFullWidthButton,
} from "../../../sharedComponents/buttons";

const AssessMildSymptoms: React.FC<AssessmentQuestionsProps> = ({assessment}) => {
    const [fever, setFever] = useState<boolean>(!!assessment.fever);
    const [cough, setCough] = useState<boolean>(!!assessment.cough);
    const [shortnessOfBreath, setShortnessOfBreath] = useState<boolean>(
        !!assessment.shortnessOfBreath,
    );
    const [difficultyBreathing, setDifficultyBreathing] = useState<boolean>(
        !!assessment.difficultyBreathing,
    );
    const [soreThroat, setSoreThroat] = useState<boolean>(!!assessment.soreThroat);
    const [runnyNose, setRunnyNose] = useState<boolean>(!!assessment.runnyNose);

    const dispatch = useDispatch();
    const onContinue = useCallback(() => {
        dispatch(
            saveMildSymptoms(
                fever,
                cough,
                shortnessOfBreath,
                difficultyBreathing,
                soreThroat,
                runnyNose,
            ),
        );
    }, [
        dispatch,
        fever,
        cough,
        shortnessOfBreath,
        difficultyBreathing,
        soreThroat,
        runnyNose,
    ]);

    const goBack = useCallback(() => {
        dispatch(saveWarningSymptoms(undefined, undefined, undefined));
    }, [dispatch]);

    const allFalse =
        !fever &&
        !cough &&
        !shortnessOfBreath &&
        !difficultyBreathing &&
        !soreThroat &&
        !runnyNose;
    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    Do you have any of the following?
                </AssessmentHeaderText>
            </AssessmentHeaderView>

            <Toggle value={fever} toggleFunc={setFever}>
                Fever
            </Toggle>
            <Toggle value={cough} toggleFunc={setCough}>
                Cough
            </Toggle>
            <Toggle value={shortnessOfBreath} toggleFunc={setShortnessOfBreath}>
                Shortness of breath
            </Toggle>
            <Toggle value={difficultyBreathing} toggleFunc={setDifficultyBreathing}>
                Difficulty breathing
            </Toggle>
            <Toggle value={soreThroat} toggleFunc={setSoreThroat}>
                Sore throat
            </Toggle>
            <Toggle value={runnyNose} toggleFunc={setRunnyNose}>
                Runny nose
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

export default AssessMildSymptoms;
