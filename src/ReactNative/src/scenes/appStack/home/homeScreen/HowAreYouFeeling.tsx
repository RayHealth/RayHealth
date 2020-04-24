import React, {useCallback} from "react";
import {Text} from "react-native";
import BrandFullWidthButton from "../../../sharedComponents/buttons/brandFullWidthButton";
import {BaseContainerView} from "../../styles";
import {useDispatch} from "react-redux";
import {initializeAssessment} from "@reduxShared/models/assessments/actions";
import {useUuid} from "../../../utils/customHooks/useUuid";

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
            <Text>How are you feeling?</Text>
            <BrandFullWidthButton onPress={isFeelingGood}>Great</BrandFullWidthButton>
            <BrandFullWidthButton onPress={isNotFeelingGood}>
                Not so great
            </BrandFullWidthButton>
        </BaseContainerView>
    );
};
export default HowAreYouFeeling;
