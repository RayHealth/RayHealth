import React, {useEffect} from "react";
import {Text} from "react-native";
import {BaseContainerView, PageContainer} from "../styles";
import {useSelector} from "react-redux";
import {getCurrentAssessment} from "@reduxShared/models/assessments/accessors";
import NavigationService from "../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../router/constants";
import AssessmentQuestions from "./assessmentQuestions/AsessmentQuestions";

const AssessmentNew: React.FC = () => {
    const currentAssessment = useSelector(getCurrentAssessment);
    useEffect(() => {
        if (!currentAssessment) NavigationService.navigate(APP_STACK_ROUTES.HOME.INDEX);
    }, [currentAssessment]);
    if (!currentAssessment) return null;
    return (
        <PageContainer>
            <BaseContainerView>
                <AssessmentQuestions assessment={currentAssessment} />
            </BaseContainerView>
            <BaseContainerView>
                <Text>{JSON.stringify(currentAssessment)}</Text>
            </BaseContainerView>
        </PageContainer>
    );
};

export default AssessmentNew;
