import * as React from "react";
import {
    CalloutSectionText,
    CalloutSectionView,
    DefaultView,
} from "../../../../../config/styleDefaults";
import {SettingPageHeaderText} from "../styles";
import {BaseContainerView, PageContainerScrollView} from "../../../styles";
import ChangeName from "./changeName";
import ChangeBirthDate from "./changeBirthDat";

interface ManagePersonalInformationProps {}
const ManagePersonalInformation: React.FC<ManagePersonalInformationProps> = () => {
    return (
        <PageContainerScrollView>
            <DefaultView>
                <SettingPageHeaderText>Personal information!</SettingPageHeaderText>
            </DefaultView>
            <BaseContainerView>
                <CalloutSectionView>
                    <CalloutSectionText>All information is optional.</CalloutSectionText>
                </CalloutSectionView>
                <CalloutSectionView>
                    <CalloutSectionText>
                        Personal information is only shared with RayHealth based on your
                        privacy settings.
                    </CalloutSectionText>
                </CalloutSectionView>
            </BaseContainerView>
            <ChangeName />
            <ChangeBirthDate />
        </PageContainerScrollView>
    );
};

export default ManagePersonalInformation;
