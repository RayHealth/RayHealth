import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUsersPermissionToShareAggregateData} from "@reduxShared/models/currentUser/selectors";
import {useCallback} from "react";
import Toggle from "../../../toggle";
import {setCurrentUserPermissionToShareAggragateDataSuccess} from "@reduxShared/models/currentUser/actions";

interface AggregateDataToggleProps {}
const AggregateDataToggle: React.FC<AggregateDataToggleProps> = () => {
    const permissionToShareAggregateData = useSelector(
        getCurrentUsersPermissionToShareAggregateData,
    );
    const dispatch = useDispatch();
    const togglePII = useCallback(() => {
        dispatch(
            setCurrentUserPermissionToShareAggragateDataSuccess(
                !permissionToShareAggregateData,
            ),
        );
    }, [dispatch, permissionToShareAggregateData]);
    return (
        <Toggle value={permissionToShareAggregateData} toggleFunc={togglePII}>
            I give permission to share aggragate data
        </Toggle>
    );
};

export default AggregateDataToggle;
