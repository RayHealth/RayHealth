import * as React from "react";
import styled from "styled-components/native";

import {DefaultH2Text, DefaultText} from "../../../../../config/styleDefaults";
import {BaseContainerView} from "../../../styles";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {getCurrentUser} from "@reduxShared/models/currentUser/selectors";
import {setCurrentUserBirthdaySuccess} from "@reduxShared/models/currentUser/actions";
import ChooseMonth from "../../../../sharedComponents/inputs/autocompleteMultiSelector/preMade/chooseMonth";
import ChooseYear from "../../../../sharedComponents/inputs/autocompleteMultiSelector/preMade/chooseYear";
import ChooseDayOfMonth from "../../../../sharedComponents/inputs/autocompleteMultiSelector/preMade/chooseDayOfMonth";
import {dateIsInRange, getDaysRangeForMonth} from "../../../../utils/dateUtils";

const ChangeBirthDate: React.FC = () => {
    const {birthYear, birthMonth, birthDay} = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const setBirthYear = useCallback(
        (newYear?: string) => {
            const year = newYear ? parseInt(newYear, 10) : undefined;
            return dispatch(
                setCurrentUserBirthdaySuccess(
                    year,
                    year ? birthMonth : undefined,
                    year &&
                        birthMonth &&
                        birthDay &&
                        dateIsInRange(getDaysRangeForMonth(year, birthMonth), birthDay)
                        ? birthDay
                        : undefined,
                ),
            );
        },
        [dispatch, birthMonth, birthDay],
    );
    const setBirthMonth = useCallback(
        (newMonth?: string) => {
            const month = newMonth ? parseInt(newMonth, 10) : undefined;
            return dispatch(
                setCurrentUserBirthdaySuccess(
                    birthYear,
                    month,
                    birthYear &&
                        month &&
                        birthDay &&
                        dateIsInRange(getDaysRangeForMonth(birthYear, month), birthDay)
                        ? birthDay
                        : undefined,
                ),
            );
        },
        [dispatch, birthYear, birthDay],
    );
    const setBirthDay = useCallback(
        (n?: string) => {
            return dispatch(
                setCurrentUserBirthdaySuccess(
                    birthYear,
                    birthMonth,
                    n ? parseInt(n, 10) : undefined,
                ),
            );
        },
        [dispatch, birthMonth, birthYear],
    );
    return (
        <BaseContainerView>
            <DefaultH2Text>Your date of birth</DefaultH2Text>
            <DefaultText>
                This is used, in conjunction with your privacy settings, to help Ray
                Health track assessments and location hot-spots based on age demographics
            </DefaultText>
            <BirthdayContainerView>
                <BirthdaySplitView>
                    <ChooseYear
                        keyToMonitor="birthYear"
                        year={birthYear}
                        setYear={setBirthYear}
                    />
                </BirthdaySplitView>
                {birthYear && (
                    <BirthdaySplitView>
                        <ChooseMonth
                            keyToMonitor="birthMonth"
                            month={birthMonth}
                            setMonth={setBirthMonth}
                        />
                    </BirthdaySplitView>
                )}
                {birthYear && birthMonth && (
                    <BirthdaySplitView>
                        <ChooseDayOfMonth
                            keyToMonitor="birthDay"
                            day={birthDay}
                            month={birthMonth}
                            year={birthYear}
                            setDay={setBirthDay}
                        />
                    </BirthdaySplitView>
                )}
            </BirthdayContainerView>
        </BaseContainerView>
    );
};

export default ChangeBirthDate;

const BirthdayContainerView = styled.View`
    display: flex;
    flex-direction: row;
`;
const BirthdaySplitView = styled.View`
    flex: 1;
    margin-right: 5px;
    margin-left: 5px;
`;
