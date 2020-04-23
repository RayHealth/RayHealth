import * as React from "react";
import {Linking} from "react-native";
import {
    AssessmentDescriptionText,
    AssessmentDescriptionView,
    AssessmentHeaderText,
    AssessmentHeaderView,
    DividerView,
} from "./styles";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {saveWarningSymptoms} from "@reduxShared/models/assessments/actions";
import ComplimentaryFullWidthButton from "../../../sharedComponents/buttons/complimenaryFullWidthButton";
import LightFullWidthButton from "../../../sharedComponents/buttons/lightFullWidthButton";
import WarningFullWidthButton from "../../../sharedComponents/buttons/warningFullWidthButton";

interface Call811Props {}
const Call811: React.FC<Call811Props> = () => {
    const [tempPermissionGiven, setTempPermissionGiven] = React.useState<boolean>(false);
    const call811 = React.useCallback(() => {
        Linking.openURL(`tel:811`);
    }, []);
    const onComplete = React.useCallback(() => {
        console.error("This is not hooked up yet");
        setTempPermissionGiven(true);
    }, []);
    const dispatch = useDispatch();
    const goBack = useCallback(() => {
        dispatch(saveWarningSymptoms(undefined, undefined, undefined));
    }, [dispatch]);
    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    Please call 811 to speak with a nurse.
                </AssessmentHeaderText>
            </AssessmentHeaderView>
            <WarningFullWidthButton onPress={call811}>Call 811</WarningFullWidthButton>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    To help health authorities trace any people you may have come into
                    contact with, please share all of your past assessments and location
                    history to keep your community safe.{`\n`}
                    To irrevocably share all of the data collected by the Ray Health app
                    with your regional health authorities, click the green button below.
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>

            {!tempPermissionGiven && (
                <ComplimentaryFullWidthButton onPress={onComplete}>
                    Complete this self assessment
                </ComplimentaryFullWidthButton>
            )}
            <DividerView />
            <LightFullWidthButton onPress={goBack}>
                I made a mistake, go back
            </LightFullWidthButton>
        </>
    );
};

export default Call811;
