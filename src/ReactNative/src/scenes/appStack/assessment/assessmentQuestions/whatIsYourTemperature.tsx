import * as React from "react";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {
    cancelCurrentAssessment,
    completeAssessment,
    grantPermissionToShare,
    recordTemperature,
} from "@reduxShared/models/assessments/actions";
import {
    AssessmentDescriptionText,
    AssessmentDescriptionView,
    AssessmentHeaderText,
    AssessmentHeaderView,
    DividerView,
} from "./styles";
import BrandFullWidthButton from "../../../sharedComponents/buttons/brandFullWidthButton";
import SecondaryFullWidthButton from "../../../sharedComponents/buttons/secondaryFullWidthButton";
import LightFullWidthButton from "../../../sharedComponents/buttons/lightFullWidthButton";
import RayHealthTemperatureInput from "../../../sharedComponents/inputs/RayHealthTemperatureInput";

const WhatIsYourTemperature = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string>("37.5");
    const onSubmitAndShare = useCallback(() => {
        dispatch(recordTemperature(parseFloat(value)));
        dispatch(grantPermissionToShare);
        dispatch(completeAssessment);
    }, [dispatch, value]);
    const onSubmitAndSave = useCallback(() => {
        dispatch(recordTemperature(parseFloat(value)));
        dispatch(completeAssessment);
    }, [dispatch, value]);
    const onSubmitNoTemp = useCallback(() => {
        dispatch(completeAssessment);
    }, [dispatch]);
    const goBack = useCallback(() => {
        dispatch(cancelCurrentAssessment);
    }, [dispatch]);

    return (
        <>
            <AssessmentHeaderView>
                <AssessmentHeaderText>
                    Glad to hear you are feeling well!
                </AssessmentHeaderText>
            </AssessmentHeaderView>
            <AssessmentDescriptionView>
                <AssessmentDescriptionText>
                    Would you like to record your temperature for future records and
                    community tracking?
                </AssessmentDescriptionText>
            </AssessmentDescriptionView>

            <RayHealthTemperatureInput onChange={setValue} value={value} />

            <BrandFullWidthButton onPress={onSubmitAndShare}>
                Submit and share anonymized data with researchers
            </BrandFullWidthButton>
            <SecondaryFullWidthButton onPress={onSubmitAndSave}>
                Save for personal only
            </SecondaryFullWidthButton>
            <LightFullWidthButton onPress={onSubmitNoTemp}>
                Save assessment without temp
            </LightFullWidthButton>
            <DividerView />
            <LightFullWidthButton onPress={goBack}>Go back</LightFullWidthButton>
        </>
    );
};

export default WhatIsYourTemperature;
