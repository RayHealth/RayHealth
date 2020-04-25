import styled from "styled-components/native";
import {STYLE} from "../../config/styleDefaults";

export const BORDER_RADIUS = "15px";

export const PageContainerView = styled.ScrollView`
    flex: 1;
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
    border-radius: ${BORDER_RADIUS};
`;
