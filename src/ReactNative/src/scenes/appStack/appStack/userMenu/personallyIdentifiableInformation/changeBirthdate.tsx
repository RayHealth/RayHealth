import * as React from "react";
import {DefaultH2Text, DefaultText} from "../../../../../config/styleDefaults";
import TextInput from "../../../../../formComponents/textInput/textInput";
import {BaseContainerView} from "../../../styles";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {getCurrentUser} from "@reduxShared/models/currentUser/selectors";
import {setCurrentUserBirthdaySuccess} from "@reduxShared/models/currentUser/actions";

interface ChangeBirthdateProps {}
const ChangeBirthdate: React.FC<ChangeBirthdateProps> = () => {
    const {birthYear, birthMonth, birthDay} = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const setBirthYear = useCallback(
        (n) =>
            dispatch(
                setCurrentUserBirthdaySuccess(
                    n ? parseInt(n, 10) : undefined,
                    birthMonth,
                    birthDay,
                ),
            ),
        [dispatch, birthMonth, birthDay],
    );
    const setBirthMonth = useCallback(
        (n) =>
            dispatch(
                setCurrentUserBirthdaySuccess(
                    birthYear,
                    n ? parseInt(n, 10) : undefined,
                    birthDay,
                ),
            ),
        [dispatch, birthYear, birthDay],
    );
    const setBirthDay = useCallback(
        (n) =>
            dispatch(
                setCurrentUserBirthdaySuccess(
                    birthYear,
                    birthMonth,
                    n ? parseInt(n, 10) : undefined,
                ),
            ),
        [dispatch, birthMonth, birthYear],
    );
    return (
        <BaseContainerView>
            <DefaultH2Text>Your date of birth</DefaultH2Text>
            <DefaultText>
                This is used, in conjunction with your privacy settings, to help Ray
                Health track assessments and location hot-spots based on age demographics
            </DefaultText>
            <TextInput
                placeholder="Year"
                value={(birthYear || "").toString()}
                onChangeText={setBirthYear}
                clearButtonMode="always"
            />
            <TextInput
                placeholder="Month"
                value={(birthMonth || "").toString()}
                onChangeText={setBirthMonth}
                clearButtonMode="always"
            />
            <TextInput
                placeholder="Day"
                value={(birthDay || "").toString()}
                onChangeText={setBirthDay}
                clearButtonMode="always"
            />
        </BaseContainerView>
    );
};

export default ChangeBirthdate;
