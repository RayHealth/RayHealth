import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUsersPermissionToSharePersonalData} from "@reduxShared/models/currentUser/selectors";
import {useCallback} from "react";
import {setCurrentUserPermissionToSharePersonalDataSuccess} from "@reduxShared/models/currentUser/actions";
import Toggle from "../../../toggle";

interface PersonallyIdentifiableInformationToggleProps {}
const PersonallyIdentifiableInformationToggle: React.FC<PersonallyIdentifiableInformationToggleProps> = () => {
    const permissionToSharePersonalData = useSelector(
        getCurrentUsersPermissionToSharePersonalData,
    );
    const dispatch = useDispatch();
    const togglePII = useCallback(() => {
        dispatch(
            setCurrentUserPermissionToSharePersonalDataSuccess(
                !permissionToSharePersonalData,
            ),
        );
    }, [dispatch, permissionToSharePersonalData]);
    return (
        <Toggle value={permissionToSharePersonalData} toggleFunc={togglePII}>
            I give permission to share personal data
        </Toggle>
    );
};

export default PersonallyIdentifiableInformationToggle;
