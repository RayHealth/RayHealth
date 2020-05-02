import * as React from "react";
import {DefaultText, DefaultView} from "../../../../../config/styleDefaults";
import {SettingPageHeaderText} from "../styles";
import {BaseContainerView, PageContainerScrollView} from "../../../styles";

interface ManagePersonalInformationProps {}
const ManagePersonalInformation: React.FC<ManagePersonalInformationProps> = () => {
    return (
        <PageContainerScrollView>
            <DefaultView>
                <SettingPageHeaderText>Tell us about you!</SettingPageHeaderText>
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
        </PageContainerScrollView>
    );
};

export default ManagePersonalInformation;
