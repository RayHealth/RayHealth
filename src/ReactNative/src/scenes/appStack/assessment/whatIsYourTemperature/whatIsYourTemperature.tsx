import * as React from "react";
import {Text, View} from "react-native";
import FullWidthButton from "../../../sharedComponents/buttons/fullWidthButton";
import NavigationService from "../../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../../router/constants";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {recordTemperature} from "@reduxShared/models/assessments/actions";
import RayHealthTextInput from "../../../sharedComponents/inputs/RayHealthTextInput";

const WhatIsYourTemperature = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string>("37.5");
    const onSubmit = useCallback(() => {
        dispatch(recordTemperature(parseFloat(value)));
        NavigationService.navigate(APP_STACK_ROUTES.HOME.INDEX);
    }, [dispatch, value]);
    return (
        <View>
            <Text>That is GREAT!</Text>

            <View>
                <Text>
                    Would you like to record your temperature (in celsius please)?
                </Text>
                <RayHealthTextInput onChange={setValue} value={value} />
            </View>
            <FullWidthButton onPress={onSubmit}>Done</FullWidthButton>
        </View>
    );
};

export default WhatIsYourTemperature;
