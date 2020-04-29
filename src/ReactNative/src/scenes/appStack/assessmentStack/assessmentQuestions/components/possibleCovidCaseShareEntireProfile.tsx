import * as React from "react";
import {AssessmentDescriptionText, AssessmentDescriptionView} from "../styles";
import {ComplimentaryFullWidthButton} from "../../../../sharedComponents/buttons";

interface PossibleCovidCaseShareEntireProfileProps {}
const PossibleCovidCaseShareEntireProfile: React.FC<PossibleCovidCaseShareEntireProfileProps> = () => {
    const [tempPermissionGiven, setTempPermissionGiven] = React.useState<boolean>(false);
    const onContinue = React.useCallback(() => {
        console.error("This is not hooked up yet");
        setTempPermissionGiven(true);
    }, []);
    return (
        <>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    To help health authorities trace any people you may have come into
                    contact with, please share all of your past assessments and location
                    history to keep your community safe.{`\n`}
                    To irrevocably share all of the data collected by the Ray Health app
                    with your regional health authorities, click the green button below.
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    TODO: Add data collection for the user's name, city, phone, ABHC#, DoB
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>

            {!tempPermissionGiven && (
                <ComplimentaryFullWidthButton onPress={onContinue}>
                    DevTODO: I want to share my personal data irrevocably
                </ComplimentaryFullWidthButton>
            )}
        </>
    );
};

export default PossibleCovidCaseShareEntireProfile;
