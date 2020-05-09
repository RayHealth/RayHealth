import styled from "styled-components/native";

interface Flex2ColumnContainerViewProps {
    alignItems: "center" | "flex-start";
}
export const Flex2ColumnContainerView = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: ${({alignItems}: Flex2ColumnContainerViewProps) =>
        alignItems ? alignItems : "flex-start"};
`;
export const Flex2ColumnFixedChild = styled.View`
    width: ${({width}: {width: number}) => width}px;
`;
export const Flex2ColumnFlexibleChild = styled.View`
    flex: 1 1;
`;
