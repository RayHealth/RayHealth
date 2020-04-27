import React, {useCallback, useState} from "react";
import {AssessmentQuestionsProps} from "./assessmentQuestions";
import {
    AssessmentDescriptionText,
    AssessmentDescriptionView,
    AssessmentHeaderText,
    AssessmentHeaderView,
    DividerView,
} from "./styles";
import Toggle from "../../toggle";
import {useDispatch} from "react-redux";
import {
    cancelCurrentAssessment,
    saveSevereSymptoms,
} from "@reduxShared/models/assessments/actions";
import {
    BrandFullWidthButton,
    LightFullWidthButton,
    SecondaryFullWidthButton,
} from "../../../sharedComponents/buttons";

const AssessSevereSymptoms: React.FC<AssessmentQuestionsProps> = ({assessment}) => {
    const [severeDifficultyBreathing, setSevereDifficultyBreathing] = useState<boolean>(
        !!assessment.severeDifficultyBreathing,
    );
    const [severeChestPain, setSevereChestPain] = useState<boolean>(
        !!assessment.severeChestPain,
    );
    const [hardTimeWakingUp, setHardTimeWakingUp] = useState<boolean>(
        !!assessment.hardTimeWakingUp,
    );
    const [feelingConfused, setFeelingConfused] = useState<boolean>(
        !!assessment.feelingConfused,
    );
    const [lostConsciousness, setLostConsciousness] = useState<boolean>(
        !!assessment.lostConsciousness,
    );

    const dispatch = useDispatch();
    const onContinue = useCallback(() => {
        dispatch(
            saveSevereSymptoms(
                severeDifficultyBreathing,
                severeChestPain,
                hardTimeWakingUp,
                feelingConfused,
                lostConsciousness,
            ),
        );
    }, [
        dispatch,
        severeDifficultyBreathing,
        severeChestPain,
        hardTimeWakingUp,
        feelingConfused,
        lostConsciousness,
    ]);
    const allFalse =
        !severeDifficultyBreathing &&
        !severeChestPain &&
        !hardTimeWakingUp &&
        !feelingConfused &&
        !lostConsciousness;
    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    Are you experiencing any of the following?
                </AssessmentHeaderText>
            </AssessmentHeaderView>

            <Toggle
                value={severeDifficultyBreathing}
                toggleFunc={setSevereDifficultyBreathing}>
                I have difficulty breathing
            </Toggle>
            <Toggle value={severeChestPain} toggleFunc={setSevereChestPain}>
                I have severe chest pains
            </Toggle>
            <Toggle value={hardTimeWakingUp} toggleFunc={setHardTimeWakingUp}>
                I have had a hard time waking up lately.
            </Toggle>
            <Toggle value={feelingConfused} toggleFunc={setFeelingConfused}>
                I feel confused a lot lately
            </Toggle>
            <Toggle value={lostConsciousness} toggleFunc={setLostConsciousness}>
                I have lost conscienceness
            </Toggle>
            <DividerView />
            {allFalse ? (
                <SecondaryFullWidthButton onPress={onContinue}>
                    None of the above
                </SecondaryFullWidthButton>
            ) : (
                <BrandFullWidthButton onPress={onContinue}>Continue</BrandFullWidthButton>
            )}
        </>
    );
};

export default AssessSevereSymptoms;
