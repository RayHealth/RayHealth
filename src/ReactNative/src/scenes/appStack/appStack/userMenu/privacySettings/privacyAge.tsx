import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPrivacySettings} from "@reduxShared/models/currentUser/selectors";
import {useCallback} from "react";
import Toggle from "../../../toggle";
import {patchCurrentUserPrivacySettings} from "@reduxShared/models/currentUser/actions";
import {DefaultH2Text, DefaultText} from "../../../../../config/styleDefaults";
import {BaseContainerView} from "../../../styles";

const PrivacyAge: React.FC = () => {
    const privacySettings = useSelector(getPrivacySettings);
    const dispatch = useDispatch();
    const toggleShareAgeExact = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                shareAgeExact: !privacySettings.shareAgeExact,
                shareAgeRange: !privacySettings.shareAgeExact
                    ? true
                    : privacySettings.shareAgeRange,
            }),
        );
    }, [dispatch, privacySettings]);
    const toggleShareAgeRange = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                shareAgeExact: privacySettings.shareAgeRange
                    ? false
                    : privacySettings.shareAgeExact,
                shareAgeRange: !privacySettings.shareAgeRange,
            }),
        );
    }, [dispatch, privacySettings]);
    return (
        <BaseContainerView>
            <DefaultH2Text>Share your age</DefaultH2Text>
            <DefaultText>
                Your age can be shared as an exact number, or an age range.
            </DefaultText>
            <Toggle
                value={privacySettings.shareAgeRange}
                toggleFunc={toggleShareAgeRange}>
                I give permission to share my age range
            </Toggle>
            {privacySettings.shareAgeRange && (
                <Toggle
                    value={privacySettings.shareAgeExact}
                    toggleFunc={toggleShareAgeExact}>
                    I give permission to share my exact age
                </Toggle>
            )}
        </BaseContainerView>
    );
};

export default PrivacyAge;
