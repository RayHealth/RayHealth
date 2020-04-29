import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPrivacySettings} from "@reduxShared/models/currentUser/selectors";
import {useCallback} from "react";
import Toggle from "../../../toggle";
import {patchCurrentUserPrivacySettings} from "@reduxShared/models/currentUser/actions";

interface PersonallyIdentifiableInformationToggleProps {}
const PersonallyIdentifiableInformationToggle: React.FC<PersonallyIdentifiableInformationToggleProps> = () => {
    const privacySettings = useSelector(getPrivacySettings);
    const dispatch = useDispatch();
    const togglePermissionToShareAge = useCallback(() => {
        dispatch(
            patchCurrentUserPrivacySettings({
                permissionToShareAge: !privacySettings.permissionToShareAge,
            }),
        );
    }, [dispatch, privacySettings]);
    return (
        <Toggle
            value={privacySettings.permissionToShareAge}
            toggleFunc={togglePermissionToShareAge}>
            I give permission to share my current age
        </Toggle>
    );
};

export default PersonallyIdentifiableInformationToggle;
