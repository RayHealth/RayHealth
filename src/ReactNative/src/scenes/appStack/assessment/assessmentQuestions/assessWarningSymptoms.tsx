import React, {useCallback, useState} from "react";
import {AssessmentQuestionsProps} from "./assessmentQuestions";
import {AssessmentHeaderText, AssessmentHeaderView, DividerView} from "./styles";
import Toggle from "../../toggle";
import {useDispatch} from "react-redux";
import {
    saveSevereSymptoms,
    saveWarningSymptoms,
} from "@reduxShared/models/assessments/actions";
import {
    BrandFullWidthButton,
    LightFullWidthButton,
    SecondaryFullWidthButton,
} from "../../../sharedComponents/buttons";

const AssessWarningSymptoms: React.FC<AssessmentQuestionsProps> = ({assessment}) => {
    const [shortnessOfBreathAtRest, setShortnessOfBreathAtRest] = useState<boolean>(
        !!assessment.shortnessOfBreathAtRest,
    );
    const [inabilityToLieDown, setInabilityToLieDown] = useState<boolean>(
        !!assessment.inabilityToLieDown,
    );
    const [
        chronicHealthConditionsExasperated,
        setChronicHealthConditionsExasperated,
    ] = useState<boolean>(!!assessment.chronicHealthConditionsExasperated);

    const dispatch = useDispatch();
    const onContinue = useCallback(() => {
        dispatch(
            saveWarningSymptoms(
                shortnessOfBreathAtRest,
                inabilityToLieDown,
                chronicHealthConditionsExasperated,
            ),
        );
    }, [
        dispatch,
        shortnessOfBreathAtRest,
        inabilityToLieDown,
        chronicHealthConditionsExasperated,
    ]);
    const goBack = useCallback(() => {
        dispatch(
            saveSevereSymptoms(undefined, undefined, undefined, undefined, undefined),
        );
    }, [dispatch]);

    const allFalse =
        !shortnessOfBreathAtRest &&
        !inabilityToLieDown &&
        !chronicHealthConditionsExasperated;
    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    Are you experiencing any of the following?
                </AssessmentHeaderText>
            </AssessmentHeaderView>
            <Toggle
                value={shortnessOfBreathAtRest}
                toggleFunc={setShortnessOfBreathAtRest}>
                Shortness of breath at rest
            </Toggle>
            <Toggle value={inabilityToLieDown} toggleFunc={setInabilityToLieDown}>
                Inability to lie down because of difficulty breathing
            </Toggle>
            <Toggle
                value={chronicHealthConditionsExasperated}
                toggleFunc={setChronicHealthConditionsExasperated}>
                Chronic health conditions that you are having difficulty managing because
                of your current respiratory illness
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

export default AssessWarningSymptoms;
