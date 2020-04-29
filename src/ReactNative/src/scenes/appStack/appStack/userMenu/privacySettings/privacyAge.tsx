import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPrivacySettings} from "@reduxShared/models/currentUser/selectors";
import {useCallback} from "react";
import Toggle from "../../../toggle";
import {patchCurrentUserPrivacySettings} from "@reduxShared/models/currentUser/actions";
import {
    CalloutSectionText,
    CalloutSectionView,
    DefaultH2Text,
    DefaultText,
} from "../../../../../config/styleDefaults";
import {BaseContainerView} from "../../../styles";

const PrivacyAge: React.FC = () => {
    const privacySettings = useSelector(getPrivacySettings);
    const dispatch = useDispatch();
    const currentlySharingAgeExact = privacySettings.shareAgeExact;
    const currentlySharingAgeRange = privacySettings.shareAgeRange;
    const toggleshareAgeExact = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                shareAgeExact: !privacySettings.shareAgeExact,
                shareAgeRange: !currentlySharingAgeExact
                    ? true
                    : privacySettings.shareAgeRange,
            }),
        );
    }, [dispatch, privacySettings, currentlySharingAgeExact, currentlySharingAgeRange]);
    const toggleshareAgeRange = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                shareAgeExact:
                    currentlySharingAgeRange && currentlySharingAgeExact
                        ? false
                        : privacySettings.shareAgeExact,
                shareAgeRange: !privacySettings.shareAgeRange,
            }),
        );
    }, [dispatch, privacySettings, currentlySharingAgeExact, currentlySharingAgeRange]);
    return (
        <BaseContainerView>
            <DefaultH2Text>Share your age</DefaultH2Text>
            <DefaultText>
                Your age can be shared as an exact number, or an age range.
            </DefaultText>
            <CalloutSectionView>
                <CalloutSectionText>
                    If you share your exact age, you will automatically also share your
                    age range.
                </CalloutSectionText>
            </CalloutSectionView>
            <Toggle
                value={privacySettings.shareAgeExact}
                toggleFunc={toggleshareAgeExact}>
                I give permission to share my exact age
            </Toggle>
            <Toggle
                value={privacySettings.shareAgeRange}
                toggleFunc={toggleshareAgeRange}>
                I give permission to share my age range
            </Toggle>
        </BaseContainerView>
    );
};

export default PrivacyAge;
