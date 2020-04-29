import * as React from "react";
import {
    DefaultText,
    DefaultView,
    DefaultH2Text,
} from "../../../../../config/styleDefaults";
import {BaseContainerView, PageContainerScrollView} from "../../../styles";
import {SettingPageHeaderText} from "../styles";
import PersonallyIdentifiableInformationToggle from "./PersonallyIdentifiableInformationToggle";

interface SetShareSettingsProps {}
const ManagePrivacySettings: React.FC<SetShareSettingsProps> = () => {
    return (
        <PageContainerScrollView>
            <DefaultView>
                <SettingPageHeaderText>Change your share settings</SettingPageHeaderText>
            </DefaultView>
            <BaseContainerView>
                <DefaultText>
                    In order to provide you and your community with the best possible data
                    to prevent the spread of COVID-19, Ray Health allows you to control
                    what information is shared with our servers and your regional health
                    authority.
                </DefaultText>
            </BaseContainerView>
            <BaseContainerView>
                <DefaultH2Text>Share personally identifiable information</DefaultH2Text>
                <DefaultText>
                    Personally identifiable information is any data that could,
                    theoretically be used to figure out who you are. This information
                    includes your age, gender, more detailed information about your trips
                </DefaultText>
                <PersonallyIdentifiableInformationToggle />
            </BaseContainerView>
        </PageContainerScrollView>
    );
};

export default ManagePrivacySettings;
