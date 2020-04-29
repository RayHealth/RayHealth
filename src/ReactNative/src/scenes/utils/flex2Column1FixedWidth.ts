import styled from "styled-components/native";

export const Flex2ColumnContainerView = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;
export const Flex2ColumnFixedChild = styled.View`
    width: ${({width}: {width: number}) => width}px;
`;
export const Flex2ColumnFlexibleChild = styled.View`
    flex-grow: 1;
    flex-shrink: 1;
`;
