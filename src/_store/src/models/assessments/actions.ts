import {ASSESSMENT, AssessmentUuid} from "./constants";

export interface AssessmentInitialize {
    type: ASSESSMENT.INITIALIZE;
    uuid: AssessmentUuid;
    feelingGood: boolean;
}
export const initializeAssessment = (
    uuid: AssessmentUuid,
    feelingGood: boolean,
): AssessmentInitialize => ({
    type: ASSESSMENT.INITIALIZE,
    uuid,
    feelingGood,
});

export interface GrantPermissionToShare {
    type: ASSESSMENT.GRANT_PERMISSION_TO_SHARE;
}
export const grantPermissionToShare: GrantPermissionToShare = {
    type: ASSESSMENT.GRANT_PERMISSION_TO_SHARE,
};

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

export interface SharedToServerSuccess {
    type: ASSESSMENT.SHARED_TO_SERVER_SUCCESS;
}
export const sharedToServerSuccess: SharedToServerSuccess = {
    type: ASSESSMENT.SHARED_TO_SERVER_SUCCESS,
};
