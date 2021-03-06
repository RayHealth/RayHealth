import * as React from "react";
import styled from "styled-components";
import {DefaultText} from "../../../config/styleDefaults";

interface ITabBarLabelProps {
    focused: boolean;
    routeName: string;
}

const TabBarLabel = (props: ITabBarLabelProps) => {
    const {routeName, focused} = props;
    const shouldNotRenderLabel = routeName === "Menu";
    if (shouldNotRenderLabel) {
        return null;
    }
    return <TabLabel focused={focused}>{routeName}</TabLabel>;
};

export default TabBarLabel;

export const TabLabel = styled(DefaultText)`
    color: ${({focused}: {focused: boolean}) => (focused ? "#000" : "#444")}
    font-size: 11px;
    margin-bottom: 5px;
`;
