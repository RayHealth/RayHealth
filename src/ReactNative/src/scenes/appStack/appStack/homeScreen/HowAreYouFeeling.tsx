import React, {useCallback} from "react";
import {FeelingContainerView} from "../../styles";
import {useDispatch} from "react-redux";
import {initializeAssessment} from "@reduxShared/models/assessments/actions";
import {useUuid} from "../../../utils/customHooks/useUuid";
import {BrandFullWidthButton} from "../../../sharedComponents/buttons";
import styled from "styled-components/native";

export const HowAreYouFeelingHeaderView = styled.View`
    margin-top: -35px;
    width: 315px;
    height: 54px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 0;
    background: #00b6b8;
`;

export const HowAreYouFeelingHeaderText = styled.Text`
    padding-top: 20px;
    padding-left: 10px;
    color: #fff;
`;

const HowAreYouFeeling: React.FC = () => {
    const dispatch = useDispatch();
    const uuid = useUuid();
    const secretKey = useUuid();
    const isFeelingGood = useCallback(() => {
        dispatch(initializeAssessment(uuid, secretKey, true));
    }, [dispatch, uuid, secretKey]);
    const isNotFeelingGood = useCallback(() => {
        dispatch(initializeAssessment(uuid, secretKey, false));
    }, [dispatch, uuid, secretKey]);
    return (
        <FeelingContainerView>
            <HowAreYouFeelingHeaderView>
                <HowAreYouFeelingHeaderText>
                    How are you feeling?
                </HowAreYouFeelingHeaderText>
            </HowAreYouFeelingHeaderView>
            <BrandFullWidthButton onPress={isFeelingGood}>Great</BrandFullWidthButton>
            <BrandFullWidthButton onPress={isNotFeelingGood}>
                Not so great
            </BrandFullWidthButton>
        </FeelingContainerView>
    );
};
export default HowAreYouFeeling;
