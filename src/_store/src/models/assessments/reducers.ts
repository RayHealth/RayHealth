import {
    ASSESSMENT,
    AssessmentActions,
    AssessmentState,
    defaultAssessmentsState,
    Assessment,
    AssessmentUuid,
} from "./constants";
import {generateUUID} from "../../utils/uuid";

const assessmentReducer = (
    state: AssessmentState = defaultAssessmentsState,
    action: AssessmentActions,
): AssessmentState => {
    switch (action.type) {
        case ASSESSMENT.INITIALIZE:
            const epoch = new Date().getTime();
            const uuid = `${epoch}::${generateUUID()}`;
            return {
                ...state,
                currentAssessmentUuid: uuid,
                assessments: {
                    ...state.assessments,
                    [uuid]: {
                        id: uuid,
                        createdAt: epoch,
                        feelingGood: action.feelingGood,
                    },
                },
            };
        case ASSESSMENT.RECORD_TEMPERATURE:
            if (!state.currentAssessmentUuid) {
                console.log(1);
                return state;
            }
            if (!state.assessments[state.currentAssessmentUuid]) {
                console.log(2);
                return state;
            }
            return {
                ...state,
                currentAssessmentUuid: undefined,
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
