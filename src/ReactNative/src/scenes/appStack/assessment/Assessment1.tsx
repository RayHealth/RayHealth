import * as React from "react";
import {Text, View} from "react-native";
import FullWidthButton from "../../sharedComponents/buttons/fullWidthButton";
import NavigationService from "../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../router/constants";

const Assessment: React.FC = () => {
    return (
        <View>
            <Text>Page 1</Text>
            <FullWidthButton
                onPress={() =>
                    NavigationService.navigate(APP_STACK_ROUTES.ASSESSMENTS.STEP_2)
                }>
                Step 2
            </FullWidthButton>
            <FullWidthButton
                onPress={() => NavigationService.navigate(APP_STACK_ROUTES.HOME.INDEX)}>
                Home
            </FullWidthButton>
        </View>
    );
};

export default Assessment;