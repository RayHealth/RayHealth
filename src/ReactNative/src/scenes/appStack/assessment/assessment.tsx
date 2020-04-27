import React, {useEffect} from "react";
import {BaseContainerView, PageContainerScrollView} from "../styles";
import {useSelector} from "react-redux";
import {getCurrentAssessment} from "@reduxShared/models/assessments/selectors";
import NavigationService from "../../../services/navigationService";
import {APP_STACK_ROUTES} from "../../router/constants";
import AssessmentQuestions from "./assessmentQuestions/assessmentQuestions";
import DevTools from "./devTools";
import rnConfig from "../../../config";
import {ScrollView} from "react-native";

const AssessmentNew: React.FC = React.memo(() => {
    const currentAssessment = useSelector(getCurrentAssessment);
    useEffect(() => {
        if (!currentAssessment)
            NavigationService.navigate(APP_STACK_ROUTES.HOME.INDEX.path);
    }, [currentAssessment]);

    const containerRef = React.useRef<ScrollView | null>(null);
    const scrollToTop = () => {
        containerRef.current?.scrollTo({y: 0, animated: false});
    };

    if (!currentAssessment) return null;
    return (
        <PageContainerScrollView ref={containerRef}>
            <BaseContainerView>
                <AssessmentQuestions
                    assessment={currentAssessment}
                    scrollToTop={scrollToTop}
                />
            </BaseContainerView>
            {rnConfig.isDevMode && <DevTools />}
        </PageContainerScrollView>
    );
});

export default AssessmentNew;
