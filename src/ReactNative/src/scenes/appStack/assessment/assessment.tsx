import React, {useEffect} from "react";
import {BaseContainerView, PageContainer} from "../styles";
import {useSelector} from "react-redux";
import {getCurrentAssessment} from "@reduxShared/models/assessments/accessors";
import NavigationService from "../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../router/constants";
import AssessmentQuestions from "./assessmentQuestions/assessmentQuestions";
import DevTools from "./devTools";
import rnConfig from "../../../config";

const AssessmentNew: React.FC = () => {
    const currentAssessment = useSelector(getCurrentAssessment);
    useEffect(() => {
        if (!currentAssessment)
            NavigationService.navigate(APP_STACK_ROUTES.HOME.INDEX.path);
    }, [currentAssessment]);
    if (!currentAssessment) return null;
    return (
        <PageContainer>
            <BaseContainerView>
                <AssessmentQuestions assessment={currentAssessment} />
            </BaseContainerView>
            {rnConfig.isDevMode && <DevTools />}
        </PageContainer>
    );
};

export default AssessmentNew;
