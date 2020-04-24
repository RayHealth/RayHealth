import React from "react";
import {Text} from "react-native";
import {BaseContainerView, PageContainer} from "../../styles";

const Placeholder: React.FC = () => (
    <PageContainer>
        <BaseContainerView>
            <Text>Placeholder</Text>
        </BaseContainerView>
        <BaseContainerView>
            <Text>&bull; Your personal details</Text>
            <Text>&bull; Your share settings</Text>
            <Text>&bull; View past assessments</Text>
            <Text>&bull; View past trips</Text>
            <Text>&bull; Term and Conditions</Text>
        </BaseContainerView>
    </PageContainer>
);

export default Placeholder;
