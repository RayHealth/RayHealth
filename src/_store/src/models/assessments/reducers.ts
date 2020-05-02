import {
    ASSESSMENT,
    Assessment,
    AssessmentActions,
    AssessmentState,
    defaultAssessmentsState,
} from "./constants";
import {APP} from "../resetStoreActions";

const updateCurrentAssessmentAttribute = (state, updates): AssessmentState => {
    if (!state.currentAssessmentUuid) return state;
    if (!state.assessments[state.currentAssessmentUuid]) return state;
    return {
        ...state,
        assessments: {
            ...state.assessments,
            [state.currentAssessmentUuid]: {
                ...(state.assessments[state.currentAssessmentUuid] as Assessment),
                ...updates,
            },
        },
    };
};

const assessmentsReducer = (
    state: AssessmentState = defaultAssessmentsState,
    action: AssessmentActions,
): AssessmentState => {
    switch (action.type) {
        case APP.RESET_STORE:
            return defaultAssessmentsState;
        case ASSESSMENT.INITIALIZE:
            return {
                ...state,
                currentAssessmentUuid: action.uuid,
                assessments: {
                    ...state.assessments,
                    [action.uuid]: {
                        id: action.uuid,
                        createdAt: new Date().getTime(),
                        feelingGood: action.feelingGood,
                    },
                },
            };
        // case ASSESSMENT.CANCEL_CURRENT:
        //     if (!state.currentAssessmentUuid) return state;
        //     const newAssessments = {...state.assessments};
        //     delete newAssessments[state.currentAssessmentUuid];
        //     return {
        //         ...state,
        //         assessments: newAssessments,
        //         currentAssessmentUuid: undefined,
        //     };
        case ASSESSMENT.COMPLETE:
            return {...state, currentAssessmentUuid: undefined};
        case ASSESSMENT.RECORD_TEMPERATURE:
            return updateCurrentAssessmentAttribute(state, {
                currentBodyTemperatureCelsius: action.temperatureInCelsius,
            });
        case ASSESSMENT.SAVE_SEVERE_SYMPTOMS:
            return updateCurrentAssessmentAttribute(state, {
                severeDifficultyBreathing: action.severeDifficultyBreathing,
                severeChestPain: action.severeChestPain,
                hardTimeWakingUp: action.hardTimeWakingUp,
                feelingConfused: action.feelingConfused,
                lostConsciousness: action.lostConsciousness,
            });
        case ASSESSMENT.SAVE_WARNING_SYMPTOMS:
            return updateCurrentAssessmentAttribute(state, {
                shortnessOfBreathAtRest: action.shortnessOfBreathAtRest,
                inabilityToLieDown: action.inabilityToLieDown,
                chronicHealthConditionsExasperated:
                    action.chronicHealthConditionsExasperated,
            });
        case ASSESSMENT.SAVE_MILD_SYMPTOMS:
            return updateCurrentAssessmentAttribute(state, {
                fever: action.fever,
                cough: action.cough,
                shortnessOfBreath: action.shortnessOfBreath,
                difficultyBreathing: action.difficultyBreathing,
                soreThroat: action.soreThroat,
                runnyNose: action.runnyNose,
            });
        case ASSESSMENT.SAVE_EXPOSURE_RISK:
            return updateCurrentAssessmentAttribute(state, {
                outOfCountryWithinLast14Days: action.outOfCountryWithinLast14Days,
                contactWithPositiveCovid19Case: action.contactWithPositiveCovid19Case,
            });
        case ASSESSMENT.SYNCED_WITH_SERVER_SUCCESS:
            return action.ids.reduce(
                (accState, id) => ({
                    ...accState,
                    assessments: {
                        ...accState.assessments,
                        [id]: {
                            ...(accState.assessments[id] as Assessment),
                            syncedToServer: new Date().getTime(),
                        },
                    },
                }),
                {...state},
            );
        default:
            return state;
    }
};

export default assessmentsReducer;
