import * as React from "react";
import {BaseContainerView} from "../styles";
import {Text} from "react-native";
import SecondaryFullWidthButton from "../../sharedComponents/buttons/secondaryFullWidthButton";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentAssessment} from "@reduxShared/models/assessments/accessors";
import {useCallback} from "react";
import {completeAssessment} from "@reduxShared/models/assessments/actions";

interface DevToolsProps {}
const DevTools: React.FC<DevToolsProps> = () => {
    const dispatch = useDispatch();
    const currentAssessment = useSelector(getCurrentAssessment);
    const onCompleteAssessment = useCallback(() => {
        dispatch(completeAssessment);
    }, [dispatch]);
    return (
        <>
            <BaseContainerView>
                <Text>{JSON.stringify(currentAssessment)}</Text>
            </BaseContainerView>
            <SecondaryFullWidthButton onPress={onCompleteAssessment}>
                Dev: Force complete assessment
            </SecondaryFullWidthButton>
        </>
    );
};

export default DevTools;
