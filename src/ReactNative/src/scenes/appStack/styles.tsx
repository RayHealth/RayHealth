import styled from "styled-components/native";
import {STYLE} from "../../config/styleDefaults";

export const PageContainerScrollView = styled.ScrollView`
    flex: 1;
`;

export const HeaderView = styled.View`
    margin-top: 0px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-top: 70px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    color: ${STYLE.COLORS.GREY1};
    background: ${STYLE.COLORS.WHITE};
    border-bottom-left-radius: ${STYLE.BORDER_RADIUS}px;
    border-bottom-right-radius: ${STYLE.BORDER_RADIUS}px;
    height: 114px;
`;

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

export const BaseContainerView = styled.View`
    margin-top: 10px;
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
