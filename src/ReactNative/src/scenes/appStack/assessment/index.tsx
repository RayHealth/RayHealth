import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Assessment1 from "./Assessment1";
import {APP_STACK_ROUTES} from "../../router/constants";
import Assessment2 from "./Assessment2";

const Stack = createStackNavigator();

const AssessmentStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name={APP_STACK_ROUTES.ASSESSMENTS.STEP_1}
            component={Assessment1}
        />
        <Stack.Screen
            name={APP_STACK_ROUTES.ASSESSMENTS.STEP_2}
            component={Assessment2}
        />
    </Stack.Navigator>
);

export default AssessmentStack;
