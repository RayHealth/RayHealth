import React from "react";
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {getCurrentUser} from "@reduxShared/models/currentUser/accessors";
import {BaseContainerView, PageContainer} from "../styles";
import SetName from "./SetName";
import HowAreYouFeeling from "./HowAreYouFeeling";

const Indent: React.FC = ({children}) => <View style={{marginLeft: 10}}>{children}</View>;

const HomeIndex: React.FC = () => {
    const currentUser = useSelector(getCurrentUser);
    return (
        <PageContainer>
            <BaseContainerView>
                <Text>LOGO GOES HERE?!?</Text>
            </BaseContainerView>
            <HowAreYouFeeling />
            <BaseContainerView>
                <Text>Home: To do list</Text>
            </BaseContainerView>
            <BaseContainerView>
                <Text>&bull; Create welcome flow</Text>
                <Indent>
                    <Text>Page 1: Explain what RayHealth is</Text>
                    <Text>Page 2: Accept terms and conditions</Text>
                    <Text>Page 3: Permission to share anonymized data</Text>
                    <Text>
                        Page 4: Permission to share personally identifyable information
                    </Text>
                    <Text>Page 5: Get name, birthdate for app use only</Text>
                    <Indent>
                        <Text>
                            &bull; Birthdate could be sent as non-identifiable information
                            for tracking?
                        </Text>
                    </Indent>
                    <Text>Page 6: What health authority are they a part of?</Text>
                    <Indent>
                        <Text>&bull; Who do we share data with? Who ya gunna call?</Text>
                    </Indent>
                </Indent>
                <Text>&bull; Add ability to track user</Text>
                {/*<Text>&bull; test</Text>
                <Text>&bull; test</Text>
                <Text>&bull; test</Text>*/}
            </BaseContainerView>
            <BaseContainerView>
                <Text>{JSON.stringify(currentUser)}</Text>
            </BaseContainerView>
            <BaseContainerView>
                <SetName />
            </BaseContainerView>
        </PageContainer>
    );
};

export default HomeIndex;
