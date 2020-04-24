import React, {useCallback} from "react";
import {Text, TouchableHighlight} from "react-native";
import {BaseContainerView, PageContainer} from "../../styles";
import NavigationService from "../../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../../router/constants";

const Placeholder: React.FC = () => {
    const navToPastAssessments = useCallback(() => {
        NavigationService.navigate(APP_STACK_ROUTES.USER.PAST_ASSESSMENTS_LIST.path);
    }, []);
    return (
        <PageContainer>
            <BaseContainerView>
                <Text>Placeholder</Text>
            </BaseContainerView>
            <BaseContainerView>
                <Text>&bull; Your personal details</Text>
                <Text>&bull; Your share settings</Text>
                <TouchableHighlight onPress={navToPastAssessments}>
                    <Text>&bull; View past assessments</Text>
                </TouchableHighlight>

                <Text>&bull; View past trips</Text>
                <Text>&bull; Term and Conditions</Text>
            </BaseContainerView>
        </PageContainer>
    );
};

export default Placeholder;
