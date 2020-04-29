import * as React from "react";
import {DefaultText, DefaultView} from "../../../../../config/styleDefaults";
import {BaseContainerView, PageContainerScrollView} from "../../../styles";
import {SettingPageHeaderText} from "../styles";
import PrivacyAge from "./privacyAge";
import PrivacyGender from "./privacyGender";
import PrivacyAssessments from "./privacyAssessements";
import PrivacyLocations from "./shareLocations";
import PrivacyEthnicity from "./privacyEthnicity";

const ManagePrivacySettings: React.FC = () => {
    return (
        <PageContainerScrollView>
            <DefaultView>
                <SettingPageHeaderText>
                    Change your privacy settings
                </SettingPageHeaderText>
            </DefaultView>
            <BaseContainerView>
                <DefaultText>
                    Ray Health's priority is putting end-users (you) in control of what is
                    shared with the public and with your regional health authority.
                </DefaultText>
                <DefaultText>
                    Sharing more information is better for your community and can help get
                    your more relevant updates in the future. However, we don't want you
                    to feel uncomfortable by forcing you to share any information you
                    don't want to share.
                </DefaultText>
                <DefaultText>
                    Ray Health allows you to control what information is shared with our
                    servers and your regional health authority.
                </DefaultText>
            </BaseContainerView>
            <PrivacyAge />
            <PrivacyGender />
            <PrivacyAssessments />
            <PrivacyLocations />
            <PrivacyEthnicity />
        </PageContainerScrollView>
    );
};

export default ManagePrivacySettings;
