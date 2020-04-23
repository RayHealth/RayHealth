import React, {useCallback, useState} from "react";
import {AssessmentQuestionsProps} from "./assessmentQuestions";
import {
    AssessmentQuestionHeaderText,
    AssessmentQuestionHeaderView,
    DividerView,
} from "./styles";
import SecondaryFullWidthButton from "../../../sharedComponents/buttons/secondaryFullWidthButton";
import Toggle from "./components/toggle";
import BrandFullWidthButton from "../../../sharedComponents/buttons/brandFullWidthButton";
import {useDispatch} from "react-redux";
import {
    saveSevereSymptoms,
    saveWarningSymptoms,
} from "@reduxShared/models/assessments/actions";
import LightFullWidthButton from "../../../sharedComponents/buttons/lightFullWidthButton";

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
            <AssessmentQuestionHeaderView>
                <AssessmentQuestionHeaderText>
                    Are you experiencing any of the following?
                </AssessmentQuestionHeaderText>
            </AssessmentQuestionHeaderView>
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
            <LightFullWidthButton onPress={goBack}>
                I made a mistake, go back
            </LightFullWidthButton>
        </>
    );
};

export default AssessWarningSymptoms;
