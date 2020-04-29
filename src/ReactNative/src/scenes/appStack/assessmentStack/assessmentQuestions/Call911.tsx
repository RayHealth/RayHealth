import * as React from "react";
import {Linking} from "react-native";
import {AssessmentHeaderText, AssessmentHeaderView, DividerView} from "./styles";
import {EmergencyFullWidthButton} from "../../../sharedComponents/buttons";
import CompleteSelfAssessmentButton from "./components/completeSelfAssessmentButton";
import PossibleCovidCaseShareEntireProfile from "./components/possibleCovidCaseShareEntireProfile";

interface Call911Props {}
const Call911: React.FC<Call911Props> = () => {
    const call911 = React.useCallback(() => {
        Linking.openURL(`tel:911`);
    }, []);

    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    Please call 911 or go directly to your nearest emergency department
                </AssessmentHeaderText>
            </AssessmentHeaderView>
            <EmergencyFullWidthButton onPress={call911}>
                Call 911 Immediately
            </EmergencyFullWidthButton>
            <PossibleCovidCaseShareEntireProfile />
            <DividerView />
            <CompleteSelfAssessmentButton askForTemperature={true} />
        </>
    );
};

export default Call911;
