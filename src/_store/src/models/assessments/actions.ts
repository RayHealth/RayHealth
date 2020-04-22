import {ASSESSMENT, AssessmentUuid} from "./constants";
import {generateUUID} from "../../utils/uuid";

export interface AssessmentInitialize {
    type: ASSESSMENT.INITIALIZE;
    feelingGood: boolean;
}
export const initializeAssessment = (feelingGood: boolean): AssessmentInitialize => ({
    type: ASSESSMENT.INITIALIZE,
    feelingGood,
});

export interface RecordTemperature {
    type: ASSESSMENT.RECORD_TEMPERATURE;
    temperatureInCelsius: number;
}
export const recordTemperature = (temperatureInCelsius: number): RecordTemperature => ({
    type: ASSESSMENT.RECORD_TEMPERATURE,
    temperatureInCelsius,
});
export interface CompleteAssessment {
    type: ASSESSMENT.COMPLETE;
}
export const completeAssessment: CompleteAssessment = {
    type: ASSESSMENT.COMPLETE,
};

export interface SubmitAnonymizedAssessmentToServer {
    type: ASSESSMENT.SUBMIT_ANONYMIZED_ASSESSMENT_TO_SERVER_REQUEST;
}
export const submitAnonymizedAssessmentToServerRequest: SubmitAnonymizedAssessmentToServer = {
    type: ASSESSMENT.SUBMIT_ANONYMIZED_ASSESSMENT_TO_SERVER_REQUEST,
};
export interface SubmitAnonymizedAssessmentToServerError {
    type: ASSESSMENT.SUBMIT_ANONYMIZED_ASSESSMENT_TO_SERVER_ERROR;
}
export const submitAnonymizedAssessmentToServerError: SubmitAnonymizedAssessmentToServerError = {
    type: ASSESSMENT.SUBMIT_ANONYMIZED_ASSESSMENT_TO_SERVER_ERROR,
};
