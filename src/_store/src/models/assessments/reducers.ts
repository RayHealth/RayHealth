import {
    ASSESSMENT,
    Assessment,
    AssessmentActions,
    AssessmentState,
    defaultAssessmentsState,
} from "./constants";

const assessmentReducer = (
    state: AssessmentState = defaultAssessmentsState,
    action: AssessmentActions,
): AssessmentState => {
    switch (action.type) {
        case ASSESSMENT.INITIALIZE:
            const epoch = new Date().getTime();
            const uuid = `${epoch}::${action.uuid}`;
            return {
                ...state,
                currentAssessmentUuid: uuid,
                assessments: {
                    ...state.assessments,
                    [uuid]: {
                        id: uuid,
                        createdAt: epoch,
                        permissionToShare: false,
                        sharedToServer: false,
                        feelingGood: action.feelingGood,
                    },
                },
            };
        case ASSESSMENT.COMPLETE:
            console.log("REDUCER");
            if (!state.currentAssessmentUuid) return state;
            if (!state.assessments[state.currentAssessmentUuid]) return state;
            return {
                ...state,
                currentAssessmentUuid: undefined,
                assessments: {
                    ...state.assessments,
                    [state.currentAssessmentUuid]: {
                        ...(state.assessments[state.currentAssessmentUuid] as Assessment),
                        completed: true,
                    },
                },
            };
        case ASSESSMENT.RECORD_TEMPERATURE:
            if (!state.currentAssessmentUuid) return state;
            if (!state.assessments[state.currentAssessmentUuid]) return state;
            return {
                ...state,
                assessments: {
                    ...state.assessments,
                    [state.currentAssessmentUuid]: {
                        ...(state.assessments[state.currentAssessmentUuid] as Assessment),
                        currentBodyTemperatureCelsius: action.temperatureInCelsius,
                    },
                },
            };
        default:
            return state;
    }
};

export default assessmentReducer;
