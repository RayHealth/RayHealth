import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPrivacySettings} from "@reduxShared/models/currentUser/selectors";
import {useCallback} from "react";
import Toggle from "../../../toggle";
import {patchCurrentUserPrivacySettings} from "@reduxShared/models/currentUser/actions";
import {DefaultH2Text} from "../../../../../config/styleDefaults";
import {BaseContainerView} from "../../../styles";

const PrivacyGender: React.FC = () => {
    const privacySettings = useSelector(getPrivacySettings);
    const dispatch = useDispatch();
    const toggleShareGender = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                shareGender: !privacySettings.shareGender,
            }),
        );
    }, [dispatch, privacySettings]);
    return (
        <BaseContainerView>
            <DefaultH2Text>Share your gender</DefaultH2Text>
            <Toggle value={privacySettings.shareGender} toggleFunc={toggleShareGender}>
                I give permission to share my gender
            </Toggle>
        </BaseContainerView>
    );
};

export default PrivacyGender;
