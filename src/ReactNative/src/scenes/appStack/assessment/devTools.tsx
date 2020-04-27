import * as React from "react";
import {BaseContainerView} from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentAssessment} from "@reduxShared/models/assessments/selectors";
import {useCallback} from "react";
import {completeAssessment} from "@reduxShared/models/assessments/actions";
import {SecondaryFullWidthButton} from "../../sharedComponents/buttons";
import {DefaultText} from "../../../config/styleDefaults";

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
                <DefaultText>{JSON.stringify(currentAssessment)}</DefaultText>
            </BaseContainerView>
            <SecondaryFullWidthButton onPress={onCompleteAssessment}>
                Dev: Force complete assessment
            </SecondaryFullWidthButton>
        </>
    );
};

export default DevTools;
