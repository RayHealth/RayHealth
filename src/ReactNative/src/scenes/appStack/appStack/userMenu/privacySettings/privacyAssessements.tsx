import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import Toggle from "../../../toggle";
import {DefaultH2Text, DefaultText} from "../../../../../config/styleDefaults";
import {BaseContainerView} from "../../../styles";
import {patchCurrentUserPrivacySettings} from "@reduxShared/models/currentUser/actions";
import {getPrivacySettings} from "@reduxShared/models/currentUser/selectors";

const PrivacyAssessments: React.FC = () => {
    const privacySettings = useSelector(getPrivacySettings);
    const dispatch = useDispatch();
    const toggleShareGender = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                shareAssessments: !privacySettings.shareAssessments,
            }),
        );
    }, [dispatch, privacySettings]);
    return (
        <BaseContainerView>
            <DefaultH2Text>Share your self assessment data</DefaultH2Text>
            <DefaultText>
                Your daily assessments are useful to help track the 'pulse' of the
                community.
            </DefaultText>
            <Toggle
                value={privacySettings.shareAssessments}
                toggleFunc={toggleShareGender}>
                I give permission to share my self assessment data
            </Toggle>
        </BaseContainerView>
    );
};

export default PrivacyAssessments;
