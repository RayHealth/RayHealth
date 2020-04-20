import React from "react";
import {View} from "react-native";
import styled from "styled-components/native";

interface IIconOwnProps {
    focused: boolean;
    routeName: string;
}
type IIconProps = IIconOwnProps;

// const isMessengerBadge = (routeName: string): boolean => routeName === 'Messenger';
const getIconSourceName = (routeName: string) => {
    switch (routeName) {
        case "Assistant":
            return require("src/assets/temporary-menu-icon.png");
        default:
            return require("src/assets/temporary-menu-icon.png");
    }
};

const TabBarIcon: React.FC<IIconProps> = ({focused, routeName}) => {
    const iconSource = getIconSourceName(routeName);
    /*
    const isTabMenu = routeName === 'Menu';
    return isTabMenu ? (
        <TabBarAvatarView>
            <UserAvatarContainer userId={currentUserId} borderColor={iconSelectedColor} />
        </TabBarAvatarView>
    ) : */
    return (
        <View>
            {/*shouldRenderUnreadMsgNotification && <UnreadMessageNotification />*/}
            <TabIcon source={iconSource} focused={focused} />
        </View>
    );
};
export const TabIcon = styled.Image`
    margin-top: 5;
    tint-color: ${({focused}: {focused: boolean}) => (focused ? "#000" : "#444")};
`;

export default TabBarIcon;
