import React from "react";
import {Text} from "react-native";
import FullWidthButton from "../../sharedComponents/buttons/fullWidthButton";
import NavigationService from "../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../router/constants";
import {BaseContainerView} from "../styles";

const HowAreYouFeeling: React.FC = () => (
    <BaseContainerView>
        <Text>How are you feeling?</Text>
        <FullWidthButton
            onPress={() =>
                NavigationService.navigate(APP_STACK_ROUTES.ASSESSMENTS.STEP_1)
            }>
            Great
        </FullWidthButton>
        <FullWidthButton
            onPress={() =>
                NavigationService.navigate(APP_STACK_ROUTES.ASSESSMENTS.STEP_1)
            }>
            Not so great
        </FullWidthButton>
    </BaseContainerView>
);
export default HowAreYouFeeling;
