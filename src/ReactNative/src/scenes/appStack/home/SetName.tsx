import React from "react";
import RayHealthTextInput from "../../sharedComponents/inputs/RayHealthTextInput";
import {Text, View} from "react-native";

const SetName: React.FC = () => {
    const [value, setValue] = React.useState<string>("name");
    return (
        <View>
            <Text>Example input: </Text>
            <RayHealthTextInput onChange={setValue} value={value} />
        </View>
    );
};

export default SetName;
