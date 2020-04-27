import * as React from "react";
import {LightFullWidthButton} from "../../../../sharedComponents/buttons";
import {useCallback} from "react";
import {
    completeAssessment,
    recordTemperature,
} from "@reduxShared/models/assessments/actions";
import {useDispatch} from "react-redux";
import {AssessmentDescriptionText} from "../styles";
import RayHealthTemperatureInput from "../../../../sharedComponents/inputs/RayHealthTemperatureInput";

interface CompleteSelfAssessmentButtonProps {
    askForTemperature: boolean;
}
const CompleteSelfAssessmentButton: React.FC<CompleteSelfAssessmentButtonProps> = ({
    askForTemperature,
}) => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string | undefined>();
    const onComplete = useCallback(() => {
        if (value) dispatch(recordTemperature(parseFloat(value)));
        dispatch(completeAssessment);
    }, [dispatch, value]);
    return (
        <>
            {askForTemperature && (
                <>
                    <AssessmentDescriptionText>
                        If possible, please input your current body temperature.
                    </AssessmentDescriptionText>
                    <RayHealthTemperatureInput onChange={setValue} value={value || ""} />
                </>
            )}
            <LightFullWidthButton onPress={onComplete}>
                Complete today's self assessment
            </LightFullWidthButton>
        </>
    );
};

export default CompleteSelfAssessmentButton;
