import React, {useCallback} from "react";
import {BaseContainerView} from "../../styles";
import {useDispatch} from "react-redux";
import {initializeAssessment} from "@reduxShared/models/assessments/actions";
import {useUuid} from "../../../utils/customHooks/useUuid";
import {BrandFullWidthButton} from "../../../sharedComponents/buttons";
import {DefaultText} from "../../../../config/styleDefaults";

const HowAreYouFeeling: React.FC = () => {
    const dispatch = useDispatch();
    const uuid = useUuid();
    const isFeelingGood = useCallback(() => {
        dispatch(initializeAssessment(uuid, true));
    }, [dispatch, uuid]);
    const isNotFeelingGood = useCallback(() => {
        dispatch(initializeAssessment(uuid, false));
    }, [dispatch, uuid]);
    return (
        <BaseContainerView>
            <DefaultText>How are you feeling?</DefaultText>
            <BrandFullWidthButton onPress={isFeelingGood}>Great</BrandFullWidthButton>
            <BrandFullWidthButton onPress={isNotFeelingGood}>
                Not so great
            </BrandFullWidthButton>
        </BaseContainerView>
    );
};
export default HowAreYouFeeling;
