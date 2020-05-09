import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {initializeAssessment} from "@reduxShared/models/assessments/actions";
import {useUuid} from "../../../utils/customHooks/useUuid";
import {BrandFullWidthButton} from "../../../sharedComponents/buttons";
import styled from "styled-components/native";
import {STYLE} from "../../../../config/styleDefaults";

export const FeelingContainerView = styled.View`
    margin-top: 40px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    color: ${STYLE.COLORS.GREY1};
    background: ${STYLE.COLORS.WHITE};
    border-radius: ${STYLE.BORDER_RADIUS}px;
`;

export const HowAreYouFeelingHeaderView = styled.View`
    margin-top: -35px;
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
    font-weight: bold;
`;

const HowAreYouFeeling: React.FC = () => {
    const dispatch = useDispatch();
    const uuid = useUuid();
    const isFeelingGood = useCallback(() => {
        dispatch(initializeAssessment(uuid, true));
    }, [dispatch, uuid]);
    const isNotFeelingGood = useCallback(() => {
        dispatch(initializeAssessment(uuid, false));
    }, [dispatch, uuid]);
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
