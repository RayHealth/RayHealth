import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPrivacySettings} from "@reduxShared/models/currentUser/selectors";
import {useCallback} from "react";
import Toggle from "../../../toggle";
import {patchCurrentUserPrivacySettings} from "@reduxShared/models/currentUser/actions";
import {DefaultH2Text} from "../../../../../config/styleDefaults";
import {BaseContainerView} from "../../../styles";

const PrivacyEthnicity: React.FC = () => {
    const privacySettings = useSelector(getPrivacySettings);
    const dispatch = useDispatch();
    const toggleShareEthnicity = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                shareEthnicity: !privacySettings.shareEthnicity,
            }),
        );
    }, [dispatch, privacySettings]);
    return (
        <BaseContainerView>
            <DefaultH2Text>Share your ethnicity</DefaultH2Text>
            <Toggle
                value={privacySettings.shareEthnicity}
                toggleFunc={toggleShareEthnicity}>
                I give permission to share my ethnicity
            </Toggle>
        </BaseContainerView>
    );
};

export default PrivacyEthnicity;
