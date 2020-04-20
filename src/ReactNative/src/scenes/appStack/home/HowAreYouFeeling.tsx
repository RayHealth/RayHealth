import React, {useCallback} from "react";
import {Text} from "react-native";
import FullWidthButton from "../../sharedComponents/buttons/fullWidthButton";
import NavigationService from "../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../router/constants";
import {BaseContainerView} from "../styles";
import {useDispatch} from "react-redux";
import {initializeAssessment} from "@reduxShared/models/assessments/actions";

const HowAreYouFeeling: React.FC = () => {
    const dispatch = useDispatch();
    const isFeelingGood = useCallback(() => {
        dispatch(initializeAssessment(true));
        NavigationService.navigate(APP_STACK_ROUTES.ASSESSMENTS.WHAT_IS_YOUR_TEMPERATURE);
    }, [dispatch]);
    const isNotFeelingGood = useCallback(() => {
        dispatch(initializeAssessment(false));
        NavigationService.navigate(APP_STACK_ROUTES.ASSESSMENTS.STEP_1);
    }, [dispatch]);
    return (
        <BaseContainerView>
            <Text>How are you feeling?</Text>
            <FullWidthButton onPress={isFeelingGood}>Great</FullWidthButton>
            <FullWidthButton onPress={isNotFeelingGood}>Not so great</FullWidthButton>
        </BaseContainerView>
    );
};
export default HowAreYouFeeling;
