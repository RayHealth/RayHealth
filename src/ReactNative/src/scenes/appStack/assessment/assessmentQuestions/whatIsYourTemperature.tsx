import * as React from "react";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {recordTemperature} from "@reduxShared/models/assessments/actions";
import {
    AssessmentQuestionDescriptionText,
    AssessmentQuestionDescriptionView,
    AssessmentQuestionHeaderText,
    AssessmentQuestionHeaderView,
} from "./styles";
import BrandFullWidthButton from "../../../sharedComponents/buttons/brandFullWidthButton";
import SecondaryFullWidthButton from "../../../sharedComponents/buttons/secondaryFullWidthButton";
import LightFullWidthButton from "../../../sharedComponents/buttons/lightFullWidthButton";
import RayHealthTemperatureInput from "../../../sharedComponents/inputs/RayHealthTemperatureInput";

const WhatIsYourTemperature = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string>("37.5");
    const onSubmitTempAndShare = useCallback(() => {
        dispatch(recordTemperature(parseFloat(value)));
    }, [dispatch, value]);
    const onSubmitAndSave = useCallback(() => {
        dispatch(recordTemperature(parseFloat(value)));
    }, [dispatch, value]);
    const onSubmitNoTemp = useCallback(() => {
        dispatch(recordTemperature(parseFloat(value)));
    }, [dispatch, value]);

    return (
        <>
            <AssessmentQuestionHeaderView>
                <AssessmentQuestionHeaderText>
                    Glad to hear you are feeling well!
                </AssessmentQuestionHeaderText>
            </AssessmentQuestionHeaderView>
            <AssessmentQuestionDescriptionView>
                <AssessmentQuestionDescriptionText>
                    Would you like to record your temperature for future records and
                    community tracking?
                </AssessmentQuestionDescriptionText>
            </AssessmentQuestionDescriptionView>

            <RayHealthTemperatureInput onChange={setValue} value={value} />

            <BrandFullWidthButton onPress={onSubmitTempAndShare}>
                Submit and share anonymized data with researchers
            </BrandFullWidthButton>
            <SecondaryFullWidthButton onPress={onSubmitAndSave}>
                Save for personal only
            </SecondaryFullWidthButton>
            <LightFullWidthButton onPress={onSubmitNoTemp}>
                Save assessment without temp
            </LightFullWidthButton>
        </>
    );
};

export default WhatIsYourTemperature;
