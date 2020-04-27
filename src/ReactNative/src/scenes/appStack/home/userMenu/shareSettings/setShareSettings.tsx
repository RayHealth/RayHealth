import * as React from "react";
import {DefaultText} from "../../../../../config/styleDefaults";
import {BaseContainerView, PageContainerScrollView} from "../../../styles";
import Toggle from "../../../toggle";
import {useState} from "react";

interface SetShareSettingsProps {}
const SetShareSettings: React.FC<SetShareSettingsProps> = () => {
    const [test, setTest] = useState<boolean>(false);
    return (
        <PageContainerScrollView>
            <BaseContainerView>
                <DefaultText>Set share settings</DefaultText>
            </BaseContainerView>
            <BaseContainerView>
                <DefaultText>Share anonymized information</DefaultText>
                <Toggle value={test} toggleFunc={setTest}>
                    Set Test
                </Toggle>
            </BaseContainerView>
        </PageContainerScrollView>
    );
};

export default SetShareSettings;
