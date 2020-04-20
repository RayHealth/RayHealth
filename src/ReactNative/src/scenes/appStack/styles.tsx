import styled from "styled-components/native";
import {ScrollView} from "react-native";
import React from "react";

const BACKGROUND_COLOR = "#eee";
export const BORDER_RADIUS = "15px";

export const KeyboardAvoidingViewStyle = {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
};
export const PageContainerView = styled.ScrollView`
    flex: 1;
`;
export const PageContainer: React.FC = (props) => (
    <ScrollView>
        <PageContainerView>{props.children}</PageContainerView>
    </ScrollView>
);

export const BasePageSafeAreaView = styled.SafeAreaView`
    flex: 1;
    background: ${BACKGROUND_COLOR};
`;
export const BaseContainerView = styled.View`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    color: #000;
    background: #fff;
    border-radius: ${BORDER_RADIUS};
`;
