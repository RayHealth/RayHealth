import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components/native";
import {getCurrentUser} from "@reduxShared/models/currentUser/selectors";
import {HeaderView, BaseContainerView, PageContainerScrollView} from "../../styles";
import SetName from "./SetName";
import HowAreYouFeeling from "./HowAreYouFeeling";
import {
    HeaderText,
    ShareIcon,
    NotificationIcon,
    DefaultText,
} from "../../../../config/styleDefaults";

const Indent = styled.View`
    margin-left: 10px;
`;

const HomeIndex: React.FC = () => {
    const currentUser = useSelector(getCurrentUser);
    return (
        <PageContainerScrollView>
            <HeaderView>
                <HeaderText>Welcome</HeaderText>
                <ShareIcon>Share</ShareIcon>
                <NotificationIcon>Notification</NotificationIcon>
            </HeaderView>
            <HowAreYouFeeling />
            <BaseContainerView>
                <DefaultText>Home: To do list</DefaultText>
            </BaseContainerView>
            <BaseContainerView>
                <DefaultText>&bull; Create welcome flow</DefaultText>
                <Indent>
                    <DefaultText>Page 1: Explain what RayHealth is</DefaultText>
                    <DefaultText>Page 2: Accept terms and conditions</DefaultText>
                    <DefaultText>Page 3: Permission to share anonymized data</DefaultText>
                    <DefaultText>
                        Page 4: Permission to share personally identifyable information
                    </DefaultText>
                    <DefaultText>
                        Page 5: Get name, birthdate for app use only
                    </DefaultText>
                    <Indent>
                        <DefaultText>
                            &bull; Birthdate could be sent as non-identifiable information
                            for tracking?
                        </DefaultText>
                    </Indent>
                    <DefaultText>
                        Page 6: What health authority are they a part of?
                    </DefaultText>
                    <Indent>
                        <DefaultText>
                            &bull; Who do we share data with? Who ya gunna call?
                        </DefaultText>
                    </Indent>
                </Indent>
                <DefaultText>&bull; Add ability to track user</DefaultText>
                {/*<DefaultText>&bull; test</DefaultText>
                <DefaultText>&bull; re-add version.json tracking for api</DefaultText>
                <DefaultText>&bull; test</DefaultText>*/}
            </BaseContainerView>
            <BaseContainerView>
                <DefaultText>{JSON.stringify(currentUser)}</DefaultText>
            </BaseContainerView>
            <BaseContainerView>
                <SetName />
            </BaseContainerView>
        </PageContainerScrollView>
    );
};

export default HomeIndex;
