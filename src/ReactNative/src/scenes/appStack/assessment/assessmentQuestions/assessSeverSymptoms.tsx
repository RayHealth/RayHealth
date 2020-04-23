import React, {useCallback, useState} from "react";
import {AssessmentQuestionsProps} from "./AsessmentQuestions";
import {
    AssessmentQuestionDescriptionText,
    AssessmentQuestionDescriptionView,
    AssessmentQuestionHeaderText,
    AssessmentQuestionHeaderView,
    DividerView,
} from "./styles";
import SecondaryFullWidthButton from "../../../sharedComponents/buttons/secondaryFullWidthButton";
import Toggle from "./components/toggle";
import BrandFullWidthButton from "../../../sharedComponents/buttons/brandFullWidthButton";
import {useDispatch} from "react-redux";
import {saveSevereSymptoms} from "@reduxShared/models/assessments/actions";

const AssessSeverSymptoms: React.FC<AssessmentQuestionsProps> = ({assessment}) => {
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
            <AssessmentQuestionHeaderView>
                <AssessmentQuestionHeaderText>
                    Oh no! Sorry to hear.
                </AssessmentQuestionHeaderText>
            </AssessmentQuestionHeaderView>
            <AssessmentQuestionDescriptionView>
                <AssessmentQuestionDescriptionText>
                    Let's perform a quick COVID-19 self-assessment. Please select any of
                    the following that apply to you.
                </AssessmentQuestionDescriptionText>
            </AssessmentQuestionDescriptionView>

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

export default AssessSeverSymptoms;
