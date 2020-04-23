import * as React from "react";
import {Linking} from "react-native";
import {
    AssessmentQuestionDescriptionText,
    AssessmentQuestionDescriptionView,
    AssessmentQuestionHeaderText,
    AssessmentQuestionHeaderView,
    DividerView,
} from "./styles";
import EmergencyFullWidthButton from "../../../sharedComponents/buttons/emergencyFullWidthButton";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {saveSevereSymptoms} from "@reduxShared/models/assessments/actions";
import ComplimentaryFullWidthButton from "../../../sharedComponents/buttons/complimenaryFullWidthButton";
import LightFullWidthButton from "../../../sharedComponents/buttons/lightFullWidthButton";

interface Call911Props {}
const Call911: React.FC<Call911Props> = () => {
    const [tempPermissionGiven, setTempPermissionGiven] = React.useState<boolean>(false);
    const call911 = React.useCallback(() => {
        Linking.openURL(`tel:911`);
    }, []);
    const onContinue = React.useCallback(() => {
        console.error("This is not hooked up yet");
        setTempPermissionGiven(true);
    }, []);
    const dispatch = useDispatch();
    const goBack = useCallback(() => {
        dispatch(
            saveSevereSymptoms(undefined, undefined, undefined, undefined, undefined),
        );
    }, [dispatch]);
    return (
        <>
            <AssessmentQuestionHeaderView>
                <AssessmentQuestionHeaderText>
                    Please call 911 or go directly to your nearest emergency department
                </AssessmentQuestionHeaderText>
            </AssessmentQuestionHeaderView>
            <EmergencyFullWidthButton onPress={call911}>
                Call 911 Immediately
            </EmergencyFullWidthButton>
            <AssessmentQuestionDescriptionView>
                <AssessmentQuestionDescriptionText>
                    To help health authorities trace any people you may have come into
                    contact with, please share all of your past assessments and location
                    history to keep your community safe.{`\n`}
                    To irrevocably share all of the data collected by the Ray Health app
                    with your regional health authorities, click the green button below.
                </AssessmentQuestionDescriptionText>
            </AssessmentQuestionDescriptionView>

            {!tempPermissionGiven && (
                <ComplimentaryFullWidthButton onPress={onContinue}>
                    I give authority to share my personal data
                </ComplimentaryFullWidthButton>
            )}
            <DividerView />
            <LightFullWidthButton onPress={goBack}>
                I made a mistake, go back
            </LightFullWidthButton>
        </>
    );
};

export default Call911;
