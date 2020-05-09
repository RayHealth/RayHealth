import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "@reduxShared/models/currentUser/selectors";
import {setCurrentUserGenderSuccess} from "@reduxShared/models/currentUser/actions";
import {availableGenders, Gender} from "@reduxShared/models/currentUser/constants";
import {DefaultH2Text, DefaultText} from "../../../../../config/styleDefaults";
import {BaseContainerView} from "../../../styles";
import AutocompleteMultiSelectorButton from "../../../../sharedComponents/inputs/autocompleteMultiSelector/autocompleteMultiSelectorButton";
import {
    convertStringToAMSValue,
    useHandleASMValueChange,
} from "../../../../sharedComponents/inputs/autocompleteMultiSelector/utils";

interface ChangeGenderProps {}
const ChangeGender: React.FC<ChangeGenderProps> = () => {
    const {gender} = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const setGender = React.useCallback(
        (g?: string) => dispatch(setCurrentUserGenderSuccess(g as Gender)),
        [dispatch],
    );
    const genders = React.useMemo(
        () => availableGenders.map(convertStringToAMSValue),
        [],
    );
    const onChange = useHandleASMValueChange(setGender);
    return (
        <BaseContainerView>
            <DefaultH2Text>Your date of birth</DefaultH2Text>
            <DefaultText>
                This is used, in conjunction with your privacy settings, to help Ray
                Health track assessments and location hot-spots based on age demographics
            </DefaultText>
            <AutocompleteMultiSelectorButton
                keyToMonitor="gender"
                onChange={onChange}
                label="Select gender"
                currentValue={gender ? [convertStringToAMSValue(gender)] : undefined}
                staticData={genders}
            />
        </BaseContainerView>
    );
};

export default ChangeGender;
