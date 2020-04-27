import * as React from "react";
import {Linking} from "react-native";
import {AssessmentHeaderText, AssessmentHeaderView, DividerView} from "./styles";
import {WarningFullWidthButton} from "../../../sharedComponents/buttons";
import CompleteSelfAssessmentButton from "./components/completeSelfAssessmentButton";
import PossibleCovidCaseShareEntireProfile from "./components/possibleCovidCaseShareEntireProfile";

interface Call811Props {}
const Call811: React.FC<Call811Props> = () => {
    const call811 = React.useCallback(() => {
        Linking.openURL(`tel:811`);
    }, []);
    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    Please call 811 to speak with a nurse.
                </AssessmentHeaderText>
            </AssessmentHeaderView>
            <WarningFullWidthButton onPress={call811}>Call 811</WarningFullWidthButton>
            <PossibleCovidCaseShareEntireProfile />
            <DividerView />
            <CompleteSelfAssessmentButton askForTemperature={true} />
        </>
    );
};

export default Call811;
